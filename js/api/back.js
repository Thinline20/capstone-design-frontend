/**
 * @prettier
 */

import { Just, Nothing } from "../utils/maybe.js";

$(document).on("click", "#idCheck", function () {
  const id = $("#id").val();
  $.post("../idCheck", { id }, function (data) {
    alert(data);
  });
});

export function getUserCookieData() {
  const id = $.cookie("id");

  if (id) {
    return new Just({
      id: id,
      department: $.cookie("department"),
      role: $.cookie("role"),
    });
  } else {
    return new Nothing();
  }
}

export function login(path, id, pw) {
  let loginPath = "";

  if (path === "/") {
    loginPath = "/login";
  } else {
    loginPath = "../login";
  }

  let result = null;

  $.ajaxSetup({ async: false });
  $.post(loginPath, { id, pw }, function (data) {
    data = JSON.parse(data);
    if (data.id) {
      $.cookie("id", id);
      $.cookie("department", data.department);
      $.cookie("role", data.role);

      console.log(data.id + "님 환영합니다.");

      result = data;
    } else {
      throw new Error(data.msg);
    }
  });
  $.ajaxSetup({ async: true });

  return data;
}

export function logout(path) {
  let logoutPath = "/logout";

  if (path === "/") {
    logoutPath = "/logout";
  } else {
    logoutPath = "../logout";
  }

  $.ajaxSetup({ async: false });
  $.post(logoutPath, {}, function (data) {
    data = JSON.parse(data);
    if (data.msg == "ok") {
      $.removeCookie("id");
    } else {
      console.log(data.msg);
    }
  });
  $.ajaxSetup({ async: true });
}
