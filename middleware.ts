import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Kontrollera om användaren är inloggad (kolla cookie)
  const isAuthenticated = request.cookies.get("admin-auth")?.value === "true";
  
  // Om man försöker komma åt admin utan att vara inloggad
  if (request.nextUrl.pathname.startsWith("/admin") && 
      !request.nextUrl.pathname.startsWith("/admin/login")) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // Om man är inloggad och försöker gå till login-sidan
  if (request.nextUrl.pathname === "/admin/login" && isAuthenticated) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
