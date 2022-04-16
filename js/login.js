/**
 * @prettier
 */

import { login } from "./api/back.js";

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".login-form")
    .addEventListener("submit", async (event) => {
      try {
        event.preventDefault();
        const loginData = Object.fromEntries(
          new FormData(event.target).entries()
        );

        const loginResult = await login(
          document.location.pathname,
          loginData.id,
          loginData.pw
        );

        if (loginResult.id) {
        }
      } catch (err) {
        window.alert(err);
      }
    });
});
