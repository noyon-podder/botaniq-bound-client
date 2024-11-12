/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService";
type Role = keyof typeof roleBasedRoutes;

const AuthRoutes = ["/login", "/register", "/forgot-password"];

const roleBasedRoutes = {
  USER: [
    /^\/user-dashboard(\/[^\/]*)?$/,
    /^\/post(\/[^\/]*)?$/,
    /^\/profile(\/.*)?$/,
    /^\/paid-post(\/.*)?$/,
  ],
  ADMIN: [
    /^\/admin-dashboard(\/[^\/]*)?$/,
    /^\/post(\/[^\/]*)?$/,
    /^\/profile(\/.*)?$/,
    /^\/paid-post(\/.*)?$/,
  ],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const user = await getCurrentUser();

  console.log({ user });

  // IF ACCESS TOKEN NOT HERE IN TO COOKIES SO SEND USER INTO LOGIN PAGE
  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }

  // ROLE BASE ROUTE ACCESS
  if (user?.role && roleBasedRoutes[user?.role as Role]) {
    const routes = roleBasedRoutes[user?.role as Role];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/post/:page*",
    "/paid-post",
    "/user-dashboard/:page*",
    "/admin-dashboard/:page*",
    "/profile/:page*",
  ],
};
