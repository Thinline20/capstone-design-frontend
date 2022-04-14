/**
 * @prettier
 */

import { createElement } from "./core/createElement.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".top-navbar-main-item").forEach((element) => {
    let dropdownItem = element.children[1];

    element.addEventListener("mouseover", () => {
      if (dropdownItem.classList.contains("hidden")) {
        dropdownItem.classList.remove("hidden");
      }
    });

    element.addEventListener("mouseout", () => {
      if (!dropdownItem.classList.contains("hidden")) {
        dropdownItem.classList.add("hidden");
      }
    });
  });

  /* 프론트 js */
  const topNavbarSide = document.querySelector(".top-navbar-side");
  const insertLocation = topNavbarSide.querySelector(".open-navbar");

  const wrapper = createElement(
    "div",
    { className: "buttons flex justify-center align-center" },
    null
  );

  // 쿠키
  if (true) {
    // 로그인 정보가 없을 경우
    if (document.location.pathname !== "/") {
      // 현재 페이지가 메인 페이지가 아닐 경우
      const loginButton = createElement(
        "a",
        {
          className: "login-button",
          href: "/pages/login.html",
        },
        "로그인"
      );

      wrapper.append(loginButton);
    }

    /* 프론트 js */
    // 만약 사용자 정보가 직원일 경우
    const role = "student";
    if (role === "employee") {
      const createUserButton = createElement(
        "a",
        {
          className: "create-user",
          href: "/pages/signup.html",
        },
        "회원생성"
      );

      wrapper.insertBefore(createUserButton, wrapper.firstChild);
    }
  } else {
    // 로그인 정보가 있을 경우
    if (document.location.pathname !== "/") {
      // 현재 페이지가 메인 페이지가 아닐 경우
      const logoutButton = createElement(
        "button",
        {
          className: "logout-button",
          onclick: () => {
            // 로그아웃 구현
            $.post("../logout", {}, function (data) {
              data = JSON.parse(data);
              if (data.msg == "ok") {
                $.removeCookie("id");
                window.location.reload();
              } else {
                alert(data.msg);
              }
            });
          },
        },
        "로그아웃"
      );
      wrapper.append(logoutButton);
    }
  }

  topNavbarSide.insertBefore(wrapper, insertLocation);
});
