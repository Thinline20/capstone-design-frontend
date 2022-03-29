/**
 * @prettier
 */

import { Maybe } from "./utils/maybe.js";
import { getLoginInfo, deleteLoginInfo } from "./core/loginInfo.js";

const loginInfo = Maybe.withDefault(null, getLoginInfo());

let topNavbarSide = document.querySelector(".top-navbar-side");

// 로그인/로그아웃 버튼
let newLink = document.createElement("a");

if (loginInfo) {
  newLink.classList.add("logout-link");
  newLink.innerText = "로그아웃";
  newLink.href = "#"

  newLink.addEventListener("click", () => {
    deleteLoginInfo();
    window.location.reload();
  })
} else {
  newLink.classList.add("login-link");
  newLink.href = "/pages/login.html";
  newLink.innerText = "로그인";
}

topNavbarSide.insertBefore(newLink, document.querySelector(".open-navbar"));
