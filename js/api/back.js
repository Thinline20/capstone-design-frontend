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
    id: "12345678",
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

export async function getUserInfo() {
  return {
    id: "12345678",
    name: "홍길동",
    college: "휴먼IT공과대학",
    department: "컴퓨터공학과",
    address: "우)11159 경기도 포천시 호국로 1007(선단동) 대진대학교",
    phone: "010-1234-5678",
    email: "example@example.com",
    enter: "2022-03-01",
  };
  // $.get();
  // const res = await fetch("get", {});
  // return res.json();
}

// export async function createUserDetail() {
//   let tmp = document.createElement("div");
//   data = $.get();
//   tmp.innerHtml = '<div class=""></div>';
//   return tmp;
// }
