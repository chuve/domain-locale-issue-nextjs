import { NextRequest, NextFetchEvent } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log("req.nextUrl.domainLocale", req.nextUrl.domainLocale);
}
