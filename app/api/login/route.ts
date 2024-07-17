import { NextResponse } from "next/server";


function handle() {
  return NextResponse.redirect('/');
}

export const GET = handle;


export const runtime = "edge";
