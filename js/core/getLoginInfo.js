/**
 * @prettier
 */

import { Maybe } from "./maybe.js";
import { getCookieData } from "../utils/cookie.js";

export const getLoginInfo = () => {
  return Maybe.withDefault("", getCookieData("id"));
};
