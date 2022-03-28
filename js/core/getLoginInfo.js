/**
 * @prettier
 */

import { Maybe } from "../utils/maybe.js";
import { getCookieData } from "../utils/cookie.js";

export const getLoginInfo = () => {
  return Maybe.withDefault("", getCookieData("id"));
};
