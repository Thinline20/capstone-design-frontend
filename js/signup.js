/**
 * @prettier
 */

import { getLoginInfo } from "./core/loginInfo.js";
import { Maybe, Just, Nothing } from "./utils/maybe.js";

const isUserAuthorized = async (loginInfo) => {
  try {
    // const res = await fetch("");
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

document.getElementById("signup-enter-date").addEventListener("change", (e) => {
  let gradDate = new Date(e.target.value);
  gradDate.setFullYear(gradDate.getFullYear() + 4);
  document.getElementById(
    "signup-grad-date"
  ).value = `${gradDate.getFullYear()}-02`;
});
