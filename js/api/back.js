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
  // return new Just({
  //   id: "user1",
  //   department: "컴퓨터공학과",
  //   role: "employee",
  // });

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

export function getDepartmentUrl() {
  return {
    컴퓨터공학과:
      "http://it.daejin.ac.kr/wslsubjectlist.do?wslID=it&menuCode=006009",
  };
}

export function login(path, id, pw) {
  let loginPath = "";

  if (path === "/") {
    loginPath = "/login";
  } else {
    loginPath = "../login";
  }

  $.post(loginPath, { id, pw }, function (data) {
    data = JSON.parse(data);
    if (data.id) {
      $.cookie("id", id);
      $.cookie("department", data.department);
      $.cookie("role", data.role);

      alert(data.id + "님 환영합니다.");
      createLogoutBox(data);
    } else {
      alert(data.msg);
    }
  });
}

export function logout(path) {
  let logoutPath = "";

  if (path === "/") {
    logoutPath = "/logout";
  } else {
    logoutPath = "../logout";
  }

  $.post(logoutPath, {}, function (data) {
    data = JSON.parse(data);
    if (data.msg == "ok") {
      $.removeCookie("id");
      location.reload();
    } else {
      alert(data.msg);
    }
  });
}
