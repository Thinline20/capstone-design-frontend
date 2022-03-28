/**
 * @prettier
 */

import { errorHandler } from "./errorHandler.js";

class Router {
  constructor() {
    this.routes = [
      { name: "home", path: "/", fileLocation: "/index.html" },
      { name: "login", path: "/login", fileLocation: "/pages/login.html" },
    ];
  }

  navigate(to, data = "") {
    try {
      let targetRoute = null;

      console.log(to);
      for (let route of this.routes) {
        if (route.path === to) {
          targetRoute = route;
          break;
        }
      }

      if (data) {
        targetRoute.path = `${targetRoute.path}/${data}`;
      }

      if (targetRoute) {
        window.location.replace(targetRoute.fileLocation);
      } else {
      }
    } catch (e) {
      console.error(404, e);
    }
  }
}

export const router = new Router();
