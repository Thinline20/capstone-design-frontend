/**
 * @prettier
 */

import { HttpStatusCode, errorHandler } from "./core/errorHandler.js";
import { router } from "./core/router.js";
import { getLoginInfo } from "./core/loginInfo.js";
import { setCookie, deleteCookie } from "./utils/cookie.js";

const loginInfo = getLoginInfo();

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());

    if (!formData.id || !formData.pw) {
      return;
    }

    const loginRes = await login(formData.id, formData.password);

    if (loginRes) {
      console.log(ee);
      setCookie("id", formData.id);
      setCookie("privilege", 2);
      window.history.back();
    }
  } catch (err) {
    console.log(err);
  }
});

const login = async (id, pw) => {
  try {
    // const res = await fetch("");
    return true;
  } catch (err) {
    console.log(err);
  }
};
