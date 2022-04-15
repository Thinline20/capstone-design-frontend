/**
 * @prettier
 */

import { login } from "./api/back.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".login-box").addEventListener("submit", (event) => {
    event.preventDefault();
    const id = $("#id").val();
    const pw = $("#pw").val();
    login(document.location.pathname, id, pw);
  });
});
