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
  return new Just({
    id: "1234",
    department: "컴퓨터공학과",
    role: "employee",
  });

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

export async function getUserDetail() {
  $.get();
}

export async function createUserDetail() {
  let tmp = document.createElement("div");
  data = $.get();
  tmp.innerHtml = '<div class=""></div>';
}
