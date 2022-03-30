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
}

const loginInfo = Maybe.withDefault(null, getLoginInfo());

if (loginInfo) {
  
} else {
  window.location.back();
}