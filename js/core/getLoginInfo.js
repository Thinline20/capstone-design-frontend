/**
 * @prettier
 */

import { Maybe, Just, Nothing } from "../utils/maybe.js";
import { getCookieData, deleteCookie } from "../utils/cookie.js";

export const getLoginInfo = () => {
  const id = Maybe.withDefault("", CookieData("id"));
  const privilegeLevel = Maybe.withDefault(0, getCookieData("privilegeLevel"));

  if (id) {
    return new Just({id: id, privilegeLevel: privilegeLevel});
  } else {
    return new Nothing();
  }
};

export const deleteLoginInfo = () => {
  const id = Maybe.withDefault("", CookieData("id"));

  if (id) {
    deleteCookie("id");
    deleteCookie("privilegeLevel");
  }
}