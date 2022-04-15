/**
 * @prettier
 */

import { createElement } from "./core/createElement.js";
import { getUserCookieData, logout } from "./api/back.js";
import { Maybe } from "./utils/maybe.js";

document.addEventListener("DOMContentLoaded", () => {
  /* 프론트 js */
  const topNavbarSide = document.querySelector(".top-navbar-side");
  const insertLocation = topNavbarSide.querySelector(".open-navbar");

  const wrapper = createElement(
    "div",
    { className: "buttons flex justify-center align-center" },
    null
  );

  const userData = Maybe.withDefault(null, getUserCookieData());

  if (!userData) {
    // 로그인 정보가 없을 경우
    if (document.location.pathname !== "/") {
      createLoginButton(wrapper);
    }
  } else {
    // 로그인 정보가 있을 경우
    if (document.location.pathname !== "/") {
      createLogoutButton(wrapper);
    }

    createCreateUserButton(wrapper, userData);
  }

  topNavbarSide.insertBefore(wrapper, insertLocation);

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
});

function createLoginButton(wrapper) {
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

function createLogoutButton(wrapper) {
  // 현재 페이지가 메인 페이지가 아닐 경우
  const logoutButton = createElement(
    "button",
    {
      className: "logout-button",
      onclick: () => {
        logout(document.location.pathname);
      },
    },
    "로그아웃"
  );

  wrapper.append(logoutButton);
}

function createCreateUserButton(wrapper, userData) {
  // 만약 사용자 정보가 직원일 경우
  if (userData.role === "employee") {
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
}
