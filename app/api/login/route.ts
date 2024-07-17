import { NextRequest, NextResponse } from "next/server";


function handle(request: NextRequest) {
  const url = new URL(request.url)
  const origin = url.origin
  return NextResponse.redirect(origin);
}

export const GET = handle;


export const runtime = "edge";
