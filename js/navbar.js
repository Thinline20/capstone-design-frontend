/**
 * @prettier
 */

import { getLoginInfo } from "./core/getLoginInfo.js";

let topNavbarSide = document.querySelector(".top-navbar-side");

let newLink = document.createElement("a");

console.log(getLoginInfo("id"));
if (getLoginInfo("id")) {
  newLink.classList.add("logout-link");
  newLink.innerText = "로그아웃";
} else {
  newLink.classList.add("login-link");
  newLink.href = "/pages/login.html";
  newLink.innerText = "로그인";
}

topNavbarSide.insertBefore(newLink, document.querySelector(".open-navbar"));
