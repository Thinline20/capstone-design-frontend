/**
 * @prettier
 */

import { isLoggedIn } from "./core/loginInfo.js";
import { createElement } from "./core/createElement.js";

if (
  document.readyState === "interactive" ||
  document.readyState === "complete"
) {
}

document.addEventListener("DOMContentLoaded", () => {
  if (true) {
    // 로그인 정보가 없을 경우
    const loginSlide = document.createElement("div");
    loginSlide.classList.add("slide");

    const slideButton = createElement(
      "button",
      { className: "slide-button" },
      "로그인하기"
    );
    slideButton.addEventListener("click", () => {
      loginSlide.style.transform = "translateX(-100%)";
    });

    const loginDescription = createElement(
      "div",
      {
        className:
          "login-description slide-side slide-front flex flex-column justify-center",
      },
      [
        createElement("h2", null, "로그인"),
        createElement("p", null, [
          "학생, 대학원, 시간강사 : 전체 정보서비스",
          createElement("br"),
          "교원, 직원, 조교 : 그룹웨어 및 포털대진을 제외한 정보서비스",
        ]),
        createElement(
          "div",
          { className: "slide-button-wrapper flex justify-center" },
          slideButton
        ),
      ]
    );

    // 로그인 폼
    const loginForm = createElement(
      "form",
      {
        className: "login-form flex flex-column justify-center",
        method: "post",
      },
      [
        createElement(
          "label",
          { className: "login-label", for: "login-id" },
          "학번(교번)"
        ),
        createElement("input", {
          name: "id",
          id: "main-login-id",
          className: "input-text",
          type: "text",
          pattern: "d{1,20}",
          required: true,
          title: "학번(교번)은 20자리 이하입니다.",
        }),

        createElement(
          "label",
          { className: "login-label", for: "login-pw" },
          "비밀번호"
        ),
        createElement("input", {
          id: "main-login-pw",
          className: "input-text",
          name: "pw",
          type: "password",
          pattern: "[a-zA-Z0-9!@#$%^&*.,?;:]{1,100}",
          required: true,
          title:
            "비밀번호는 100자리 이하입니다. 알파벳 대소문자, 숫자, 특수문자(!@#$%^&*.,?;:)를 사용할 수 있습니다.",
        }),

        createElement(
          "button",
          { type: "submit", className: "submit" },
          "로그인"
        ),
      ]
    );

    const findAccount = createElement(
      "a",
      { href: "#", className: "find-account" },
      "학번/비밀번호 찾기"
    );

    const loginFormWrapper = createElement(
      "div",
      {
        className:
          "login-form-wrapper slide-side slide-back flex flex-column justify-center",
      },
      [loginForm, findAccount]
    );

    loginSlide.append(loginDescription, loginFormWrapper);

    const loginBox = document.querySelector(".main-right .login-box");
    loginBox.append(loginSlide);
  } else {
    // 로그인 정보가 없을 경우
    const logoutBox = createElement("div", {}, []);
  }
  let lastScrollTop = window.pageYOffset || document.body.scrollTop;
  let searchBox = document.querySelector(".search-form-wrapper");
  let bottomNavbar = document.querySelector(".bottom-navbar");

  if (document.documentElement.scrollTop > 150) {
    searchBox.style.transform = "none";
  }

  // 로그인박스

  // let loginBoxSlide = document.querySelector(".main-right .login-box .slide");
  // let loginBoxSlideButton = document.querySelector(
  //   ".main-right .login-box .login-slide-button"
  // );

  // loginBoxSlideButton.addEventListener("click", () => {
  //   console.log("click");
  //   loginBoxSlide.style.transform = "translateX(-100%)";
  // });

  // window.addEventListener("scroll", () => {
  //   let currentScrollTop = document.documentElement.scrollTop;

  //   if (currentScrollTop > 80 || lastScrollTop > 80) {
  //   }

  //   if (currentScrollTop > 150 || lastScrollTop > 150) {
  //     searchBox.style.transform = "translateY(calc(-5vh - 10rem))";
  //   } else {
  //     searchBox.style.transform = "none";
  //   }

  //   lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  // });

  // let menuTabs = document.querySelectorAll(".menu-input-tab");
  // menuTabs.forEach((element) => {
  //   element.addEventListener("change", () => {
  //     let content = document.querySelector(
  //       `#menu-tab-content${element.id.slice(-1)}`
  //     );

  //     if (content.classList.contains("hidden")) {
  //       content.classList.remove("hidden");
  //     }

  //     for (let i = 1; i <= menuTabs.length; ++i) {
  //       if (i != element.id.slice(-1)) {
  //         if (!content.classList.contains("hidden")) {

  //         }
  //       }
  //     }
  //   });
  // });

  // function setTabDisplay(element) {
  //   if (element.getAttribute("checked")) {
  //     console.log("checked");
  //   }
  // }
});
