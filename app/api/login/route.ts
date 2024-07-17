import { NextRequest,  } from "next/server";


function handle(request: NextRequest) {
  // const url = new URL(request.url)
  // const origin = url.origin
  // return NextResponse.redirect(origin);
  return Response.redirect('/')
}

export const GET = handle;


export const runtime = "edge";
