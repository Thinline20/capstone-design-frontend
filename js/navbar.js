/**
 * @prettier
 */

import { createElement } from "./core/createElement.js";
import { getUserCookieData } from "./api/back.js";
import { Maybe } from "./utils/maybe.js";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector(".root");

  /* 프론트 js */
  // 상단 내비게이션
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

  // 하단 내비개이션
  const bottomNavbar = document.querySelector(".bottom-navbar");
  if (root.offsetHeight >= 1200) {
    let lastScrollTop = window.pageYOffset || document.body.scrollTop;

    window.onscroll = function (event) {
      let currentScrollTop = document.documentElement.scrollTop;

      if (lastScrollTop <= 200) {
        if (bottomNavbar.classList.contains("active")) {
          bottomNavbar.classList.remove("active");
        }
      }

      if (lastScrollTop > 200 && currentScrollTop > lastScrollTop) {
        if (!bottomNavbar.classList.contains("active")) {
          bottomNavbar.classList.add("active");
        }
      }

      if (
        document.documentElement.scrollTop + window.innerHeight >
        root.offsetHeight - 80
      ) {
        bottomNavbar.style.transitionProperty = "none";

        if (!bottomNavbar.classList.contains("fixed")) {
          bottomNavbar.classList.add("fixed");
        }
      } else {
        if (bottomNavbar.classList.contains("fixed")) {
          bottomNavbar.classList.remove("fixed");
        }
      }

      if (
        document.documentElement.scrollTop + window.innerHeight <
        root.offsetHeight - 90
      ) {
        bottomNavbar.style.transitionProperty = "inset";
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    document.querySelector(".scroll-to-top").addEventListener("click", (_) => {
      if (bottomNavbar.classList.contains("active")) {
        bottomNavbar.classList.remove("active");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  } else {
    if (bottomNavbar.classList.contains("active")) {
      bottomNavbar.classList.remove("active");
    }

    if (!bottomNavbar.classList.contains("fixed")) {
      bottomNavbar.classList.add("fixed");
    }

    bottomNavbar.querySelector(".scroll-to-top").classList.add("hidden");
  }
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
      onclick: async (event) => {
        try {
          // 프론트 js
          // TODO
          $.post(document.location.pathname, {}, function (data) {
            data = JSON.parse(data);
            if (data.msg == "ok") {
              $.removeCookie("id");
              $.removeCookie("role");
              $.removeCookie("department");
            } else {
              throw new Error(data.msg);
            }
          });
        } catch (err) {
          console.log(err);
        }
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
