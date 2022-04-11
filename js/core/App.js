/**
 * @prettier
 */

import { Maybe } from "../utils/maybe.js";
import { setCookie, getCookieData, deleteCookie } from "./cookie.js";
import { HttpMethod, request } from "../api/request.js";
import { SessionType } from "../api/requestTypes.js";

class App {
  constructor() {
    console.log("init");

    this.loggedIn = false;
  }

  init() {
    const sessionCookie = Maybe.withDefault("", getCookieData("session"));

    if (sessionCookie) {
    } else {
      this.clearCookie();
    }
  }

  createCookie(id, role, session) {
    setCookie("id", id);
    setCookie("role", role);
    setCookie("session", session);
  }

  clearCookie() {
    deleteCookie("id");
    deleteCookie("role");
    deleteCookie("session");
  }

  getCookie() {
    
  }
}

const app = new App();

export default app;
// async function isLoggedIn(path) {
//   return false;
//   return true;
//   const idCookie = getCookieData("id");

//   if (idCookie) {
//     const roleCookie = getCookieData("role");
//     const sessionCookie = getCookieData("session");

//     if (!roleCookie || !sessionCookie) {
//       clearCookie();
//       return false;
//     }

//     const cookies = SessionType(idCookie, roleCookie, sessionCookie);
//     const res = await request(HttpMethod.get, path, cookies);

//     if (res.status === 200) {
//       return true;
//     } else {
//       clearCookie();
//       return false;
//     }
//   } else {
//     clearCookie();
//     return false;
//   }
// }

async function isLoggedIn(path) {
  return false;
}
