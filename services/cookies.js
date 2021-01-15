import { func } from "joi";
import { Cookies } from "react-cookie";

function setCookies(name, val) {
  return initializeCookes().set(name, val);
}

function getCookies(name) {
  return initializeCookes().get(name);
}

function initializeCookes() {
  return new Cookies();
}

export const Cookie = {
  setCookies,
  getCookies,
};
