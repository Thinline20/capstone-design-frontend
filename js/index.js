/**
 * @prettier
 */

import { Maybe } from "./utils/maybe.js";
import { createElement } from "./core/createElement.js";
import { getUserCookieData } from "./api/back.js";
import { getDepartmentUrl } from "./core/department.js";

document.addEventListener("DOMContentLoaded", () => {
  const userData = Maybe.withDefault(null, getUserCookieData());

  if (!userData) {
    // 로그인 정보가 없을 경우
    createLoginBox();
  } else {
    // 로그인 정보가 있을 경우
    createLogoutBox(userData);
  }

  let lastScrollTop = window.pageYOffset || document.body.scrollTop;
  let searchBox = document.querySelector(".search-form-wrapper");

  // if (document.documentElement.scrollTop > 200) {
  //   searchBox.style.transform = "translateY(calc(-5vh - 10rem))";
  // } else {
  //   searchBox.style.transform = "none";
  // }

  // window.addEventListener("scroll", () => {
  //   let currentScrollTop = document.documentElement.scrollTop;

  //   if (currentScrollTop > 200 || lastScrollTop > 200) {
  //     searchBox.style.transform = "translateY(calc(-5vh - 10rem))";
  //   } else {
  //     searchBox.style.transform = "none";
  //   }

  //   lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  // });
});

// 로그인 박스 생성
function createLoginBox() {
  const loginBox = document.querySelector(".main-right .user-log");

  if (loginBox.classList.contains("logout-box")) {
    loginBox.classList.remove("logout-box");
  }
  loginBox.classList.add("login-box");

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

  /* 프론트엔드 */
  // 로그인 폼
  const loginForm = createElement(
    "form",
    {
      className: "login-form flex flex-column justify-center",
      method: "post",
      onsubmit: async (event) => {
        // 프론트 js
        // TODO
        try {
          event.preventDefault();
          const loginData = Object.fromEntries(
            new FormData(event.target).entries()
          );

          $.post("/login", loginData, function (data) {
            data = JSON.parse(data);
            if (data.id) {
              $.cookie("id", id);
              $.cookie("department", data.department);
              $.cookie("role", data.role);

              console.log(data.id + "님 환영합니다.");

              createLogoutBox(data);
            } else {
              throw new Error(data.msg);
            }
          });
        } catch (err) {
          window.alert(err);
        }
      },
    },
    [
      createElement(
        "label",
        { className: "login-label", htmlFor: "id" },
        "학번(교번)"
      ),
      createElement("input", {
        name: "id",
        id: "id",
        className: "input-text",
        type: "text",
        pattern: "[0-9]{1,20}",
        required: true,
        autocomplete: "username",
        title: "학번(교번)은 20자리 이하입니다.",
      }),

      createElement(
        "label",
        { className: "login-label", htmlFor: "pw" },
        "비밀번호"
      ),
      createElement("input", {
        name: "pw",
        id: "pw",
        className: "input-text",
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

  loginBox.append(loginSlide);
}

// 로그아웃 박스 생성
function createLogoutBox(data) {
  const logoutBox = document.querySelector(".main-right .user-log");

  if (logoutBox.classList.contains("login-box")) {
    while (logoutBox.hasChildNodes()) {
      logoutBox.removeChild(logoutBox.firstChild);
    }
    logoutBox.classList.remove("login-box");
  }
  logoutBox.classList.add("logout-box");

  const logoutDescription = createElement(
    "div",
    { className: "logout-description flex align-center" },
    createElement("h3", null, [
      createElement("span", { className: "user-name" }, data.id),
      "님 환영합니다",
    ])
  );

  const logoutButtons = createElement(
    "div",
    {
      className: "buttons flex justify-center align-center",
    },
    [
      createElement(
        "button",
        {
          className: "department-link",
          onclick: () => {
            document.location.href = getDepartmentUrl(data.department);
          },
        },
        [
          createElement("span", null, data.department),
          createElement("span", null, "클릭"),
        ]
      ),
      /* 프론트엔드 */
      // 로그아웃 버튼
      createElement(
        "button",
        {
          className: "logout-button",
          onclick: async (event) => {
            // 프론트 js
            // TODO
            try {
              $.post("/", {}, function (data) {
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
        [
          createElement("span", null, "로그아웃"),
          createElement("span", null, "클릭"),
        ]
      ),
    ]
  );

  logoutBox.append(logoutDescription, logoutButtons);
}
