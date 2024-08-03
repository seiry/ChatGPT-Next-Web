"use client";

import { parse } from "cookie";
export const useJWTCookieAuthCheck = () => {
  if (!document?.cookie) return false;
  const cookies = parse(document.cookie);
  if (!cookies.CF_Authorization) {
    // alert("You are not logged in. Redirecting to login page.");
    gotoLogin()
  }
};

export const gotoLogin = () => {
  location.href = "/api/login";
};
