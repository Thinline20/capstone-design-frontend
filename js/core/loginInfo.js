/**
 * @prettier
 */

import { Maybe } from "../utils/maybe.js";
import { getCookieData } from "./cookie.js";

const loginCookieData = getCookieData("id");

// 

export function isLoggedIn() {
  return true;
  return false;
}