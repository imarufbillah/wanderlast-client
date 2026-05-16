import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

/**
 * Proxy function to secure protected routes
 * Runs before requests are completed to check authentication
 */
export async function proxy(request) {
  const { pathname } = request.nextUrl;

  // Define protected routes that require authentication
  const protectedRoutes = [
    "/profile",
    "/bookings",
    "/destinations/new",
    "/destinations/[id]/edit", // Will match any /destinations/*/edit path
  ];

  // Define admin-only routes
  const adminRoutes = ["/destinations/new", "/destinations/[id]/edit"];

  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some((route) => {
    // Handle dynamic routes like /destinations/[id]/edit
    if (route.includes("[id]")) {
      const pattern = route.replace("[id]", "[^/]+");
      const regex = new RegExp(`^${pattern}`);
      return regex.test(pathname);
    }
    return pathname.startsWith(route);
  });

  // Check if the current path is an admin route
  const isAdminRoute = adminRoutes.some((route) => {
    if (route.includes("[id]")) {
      const pattern = route.replace("[id]", "[^/]+");
      const regex = new RegExp(`^${pattern}`);
      return regex.test(pathname);
    }
    return pathname.startsWith(route);
  });

  // If it's a protected route, verify authentication
  if (isProtectedRoute) {
    try {
      // Get session using Better Auth
      const session = await auth.api.getSession({
        headers: request.headers,
      });

      // If no session exists, redirect to sign-in page
      if (!session) {
        const signInUrl = new URL("/signin", request.url);
        // Add redirect parameter to return user after login
        signInUrl.searchParams.set("redirect", pathname);
        return NextResponse.redirect(signInUrl);
      }

      // If it's an admin route, check for admin role
      if (isAdminRoute) {
        if (session.user.role !== "admin") {
          // Redirect non-admins to destinations page with error
          const destinationsUrl = new URL("/destinations", request.url);
          destinationsUrl.searchParams.set("error", "unauthorized");
          return NextResponse.redirect(destinationsUrl);
        }
      }
    } catch (error) {
      // If there's an error checking auth, redirect to sign-in
      console.error("Proxy auth check error:", error);
      const signInUrl = new URL("/signin", request.url);
      signInUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(signInUrl);
    }
  }

  // Allow the request to continue
  return NextResponse.next();
}

/**
 * Matcher configuration to specify which paths the proxy should run on
 * Using negative lookahead to exclude static files and API routes
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - public assets (images, fonts, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|assets).*)",
  ],
};
