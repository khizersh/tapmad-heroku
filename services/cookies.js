import cookie from "cookie";
// import { Cookies } from "react-cookie";
import Cookies from "universal-cookie";

function setCookies(name, val) {
  var expiryDate = new Date();
  let maxAges = expiryDate.setMonth(expiryDate.getMonth() + 1);
  console.log(maxAges)
  return initializeCookes().set(name, val, { path: "/", maxAge: maxAges });
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
