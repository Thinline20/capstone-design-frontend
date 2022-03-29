/**
 * @prettier
 */

import { Maybe } from "./utils/maybe.js";
import { addLoginInfo, getLoginInfo } from "./core/loginInfo.js";

const loginInfo = Maybe.withDefault(null, getLoginInfo());

if (loginInfo) {
  window.location.href = "/"
}

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());

    if (!formData.id) {
      console.log("No id");
      return;
    }
    if (!formData.password) {
      console.log("No password");
      return;
    }

    const loginRes = await login(formData.id, formData.password);
    console.log(loginRes);

    if (loginRes) {
      addLoginInfo(formData.id, 2);
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
