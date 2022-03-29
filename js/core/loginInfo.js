/**
 * @prettier
 */

import { Maybe, Just, Nothing } from "../utils/maybe.js";
import { getCookieData, deleteCookie } from "../utils/cookie.js";

export const getLoginInfo = () => {
  const id = Maybe.withDefault("", getCookieData("id"));

  if (id) {
    return new Just({
      id: id,
      privilegeLevel: Maybe.withDefault(0, getCookieData("privilege")),
    });
  } else {
    return new Nothing();
  }
};

export const removeLoginCookie = () => {
  deleteCookie("id");
  deleteCookie("privilege");
};
