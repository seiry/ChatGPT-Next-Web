import { NextRequest,  } from "next/server";


function handle(request: NextRequest) {
  // const url = new URL(request.url)
  // const origin = url.origin
  // return NextResponse.redirect(origin);
  // 302 to /
  return new Response(null, {
    status: 302,
    headers: {
      "Location": "/"
    }
  });
  
}

export const GET = handle;


export const runtime = "edge";
