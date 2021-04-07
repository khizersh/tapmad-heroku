import cookie from "cookie";
import { func } from "joi";
// import { Cookies } from "react-cookie";
import Cookies from "universal-cookie";

function setCookies(name, val) {
  return initializeCookes().set(name, val, { path: "/" });
}

function getCookies(name) {
  return initializeCookes().get(name);
}

function removeCookie(name) {
  return initializeCookes().remove(name);
}

function initializeCookes() {
  return new Cookies();
}

function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}

export const Cookie = {
  setCookies,
  getCookies,
  parseCookies,
  removeCookie,
  initializeCookes,
};
