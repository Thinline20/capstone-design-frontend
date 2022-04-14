/**
 * @prettier
 */

import { createElement } from "./core/createElement.js";

document.addEventListener("DOMContentLoaded", () => {
  /* 프론트 js */
  if (true) {
    // 로그인 정보가 있을 경우
    createLoginBox();
  } else {
    // 로그인 정보가 없을 경우
    createLogoutBox();
  }
  /* 프론트 js 끝*/

  let lastScrollTop = window.pageYOffset || document.body.scrollTop;
  let searchBox = document.querySelector(".search-form-wrapper");
  let bottomNavbar = document.querySelector(".bottom-navbar");

  if (document.documentElement.scrollTop > 150) {
    searchBox.style.transform = "none";
  }

  window.addEventListener("scroll", () => {
    let currentScrollTop = document.documentElement.scrollTop;

    if (currentScrollTop > 80 || lastScrollTop > 80) {
    }

    if (currentScrollTop > 150 || lastScrollTop > 150) {
      searchBox.style.transform = "translateY(calc(-5vh - 10rem))";
    } else {
      searchBox.style.transform = "none";
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  });
});

// 로그인 박스 생성
function createLoginBox() {
  const loginSlide = document.createElement("div");
  loginSlide.classList.add("slide");

  const slideButton = createElement("button", { className: "slide-button" }, [
    createElement("span", null, "로그인하기"),
    createElement("span", null, "클릭"),
  ]);
  slideButton.addEventListener("click", () => {
    loginSlide.style.transform = "translateX(-100%)";
  });

  slideButton.mouse;

  const loginDescription = createElement(
    "div",
    {
      className: "login-description slide-side slide-front flex flex-column",
    },
    [
      createElement("h2", null, "로그인"),
      createElement("p", null, [
        "학생, 대학원, 시간강사: 전체 정보서비스",
        createElement("br"),
        "교원, 직원, 조교: 그룹웨어 및 포털대진을 제외한 정보서비스",
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
      action: "",
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
        pattern: "[0-9]{1,20}",
        required: true,
        autocomplete: "username",
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
        autocomplete: "current-password",
        title:
          "비밀번호는 100자리 이하입니다. 알파벳 대소문자, 숫자, 특수문자(!@#$%^&*.,?;:)를 사용할 수 있습니다.",
      }),

      // 로그인 버튼
      createElement(
        "button",
        {
          type: "submit",
          className: "submit",
          onclick: (event) => {
            const id = $("#id").val();
            const pw = $("#pw").val();

            $.post("../login", { id, pw }, function (data) {
              data = JSON.parse(data);
              if (id) {
                $.cookie("id", id);
                alert(id + "가 아이디" + pw + "가 비번");
              } else {
                alert(data.msg);
              }
            });
          },
        },
        "로그인"
      ),
    ]
  );

  const loginFormWrapper = createElement(
    "div",
    {
      className:
        "login-form-wrapper slide-side slide-back flex flex-column justify-center",
    },
    [
      loginForm,
      createElement(
        "a",
        { href: "#", className: "find-account" },
        "학번/비밀번호 찾기"
      ),
    ]
  );

  loginSlide.append(loginDescription, loginFormWrapper);

  const loginBox = document.querySelector(".main-right .login-box");
  loginBox.append(loginSlide);
}

// 로그아웃 박스 생성
function createLogoutBox() {
  const logoutBox = document.querySelector(".main-right .login-box");
  logoutBox.classList.remove("login-box");
  logoutBox.classList.add("logout-box");

  const logoutDescription = createElement(
    "div",
    { className: "logout-description" },
    []
  );
  const logoutButton = createElement("button", { className: "logout-button" }, [
    createElement("span", null, "로그아웃"),
    createElement("span", null, "클릭"),
  ]);

  logoutBox.append(logoutButton);
}
