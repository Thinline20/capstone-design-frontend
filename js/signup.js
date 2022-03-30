/**
 * @prettier
 */

import { getLoginInfo } from "./core/loginInfo.js";
import { Maybe } from "./utils/maybe.js";

const isUserAuthorized = async (loginInfo) => {
  try {
    // const res = await fetch("");
    return true;
  } catch (err) {
    console.log(err);
  }
}

const loginInfo = Maybe.withDefault(null, getLoginInfo());

