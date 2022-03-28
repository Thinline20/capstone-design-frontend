/**
 * @prettier
 */

import { HttpStatusCode, errorHandler } from "./core/errorHandler.js";
import { router } from "./core/router.js";
import { getLoginInfo } from "./core/getLoginInfo.js";
import { setCookie, deleteCookie } from "./core/cookie.js";

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(e.target).entries());

  setCookie("id", formData.id);
});

const login = async (id, pw) => {
  try {
    // const res = await fetch("");
    return true;
  } catch (err) {
    console.log(err);
  }
};
