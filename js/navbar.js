/**
 * @prettier
 */

import { Maybe } from "./utils/maybe.js";
import { getLoginInfo, deleteLoginInfo } from "./core/loginInfo.js";

const loginInfo = Maybe.withDefault(null, getLoginInfo());

let topNavbarSide = document.querySelector(".top-navbar-side");

// 로그인/로그아웃, 회원가입 버튼
let logInOutLink = document.createElement("a");

if (loginInfo) {
  logInOutLink.classList.add("logout-link", "log");
  logInOutLink.innerText = "로그아웃";
  logInOutLink.href = "#";

  logInOutLink.addEventListener("click", () => {
    deleteLoginInfo();
    window.location.reload();
  });
} else {
  logInOutLink.classList.add("login-link", "log");
  logInOutLink.href = "/pages/login.html";
  logInOutLink.innerText = "로그인";
}

topNavbarSide.insertBefore(
  logInOutLink,
  document.querySelector(".open-navbar")
);

if (loginInfo && loginInfo.privilegeLevel === "2") {
  let signupLink = document.createElement("a");
  signupLink.classList.add("signup-link");
  signupLink.href = "/pages/signup.html";
  signupLink.innerText = "회원가입";

  topNavbarSide.insertBefore(signupLink, document.querySelector(".log"));
}
