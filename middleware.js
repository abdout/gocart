import { localizationMiddleware } from './components/internationalization/middleware.js';

// Matcher configuration to ignore specific paths
export const config = {
  matcher: [
    // Match all pathnames except:
    // - api routes
    // - _next (Next.js internals)
    // - _static (static files)
    // - favicon, sitemap, robots, etc.
    // - all files with extensions (e.g., .js, .css, .png)
    '/((?!api|_next|_static|favicon.ico|sitemap.xml|robots.txt|.*\\.[a-zA-Z0-9]+$).*)',
  ],
};

/**
 * Main middleware function that handles localization
 * @param {import('next/server').NextRequest} request - The incoming request
 * @returns {import('next/server').NextResponse} The response
 */
export function middleware(request) {
  return localizationMiddleware(request);
}