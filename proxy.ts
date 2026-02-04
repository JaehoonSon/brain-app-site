import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { locales } from "@/lib/locales";

const defaultLocale = "en";
const localeLookup = new Set(locales.map((locale) => locale.toLowerCase()));

function pathnameStartsWithLocale(pathname: string): boolean {
  if (!pathname) return false;
  const [, segment] = pathname.split("/");
  if (!segment) return false;

  try {
    const normalized = decodeURIComponent(segment).toLowerCase();
    return localeLookup.has(normalized);
  } catch {
    return false;
  }
}

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach(
    (value: string, key: string) => (negotiatorHeaders[key] = value),
  );

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  return match(languages, locales, defaultLocale);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathnameStartsWithLocale(pathname)) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  const suffix =
    pathname === "/"
      ? ""
      : pathname.startsWith("/")
        ? pathname
        : `/${pathname}`;
  request.nextUrl.pathname = `/${locale}${suffix}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|api|favicon.ico|.*\\..*).*)",
  ],
};
