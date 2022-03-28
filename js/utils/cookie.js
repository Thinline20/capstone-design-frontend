/**
 * @prettier
 */

import { Maybe, Just, Nothing } from "./maybe.js";

export const setCookie = (name, data, timeout = 12) => {
  if (timeout < 1 && timeout > 24) {
    throw new Error("쿠키 만료시간은 1~24시간내에서 설정해주세요");
  }

  let date = new Date();
  date.setHours(date.getHours() + timeout);

  document.cookie = `${name}=${data}; expires=${date.toGMTString()}; path=/`;
};

export const getCookieData = (name) => {
  const cookieData = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name));

  if (cookieData) {
    return new Just(cookieData.split("=")[1]);
  } else {
    return new Nothing();
  }
};

export const deleteCookie = (name) => {
  let cookieData = Maybe.withDefault("", getCookieData(name));

  if (cookieData) {
    document.cookie = `${name}=${cookieData}; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;
  } else {
    throw new Error("Cookie not found");
  }
};
