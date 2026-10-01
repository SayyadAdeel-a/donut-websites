import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const brandId = process.env.NEXT_PUBLIC_BRAND_ID;

  // If running in master/unbranded mode, allow all routes
  if (!brandId || brandId === 'master' || brandId === 'none' || brandId === '') {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Route isolation for brand deployments:
  // Map legacy Webflow template variation URLs to canonical brand URLs
  if (pathname.startsWith('/homepages')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (pathname.startsWith('/about-us')) {
    return NextResponse.redirect(new URL('/about', request.url));
  }

  if (pathname.startsWith('/contact-us')) {
    return NextResponse.redirect(new URL('/contact', request.url));
  }

  if (pathname.startsWith('/subscribe-save')) {
    return NextResponse.redirect(new URL('/subscribe', request.url));
  }

  if (pathname.startsWith('/why-donutland')) {
    return NextResponse.redirect(new URL('/why', request.url));
  }

  if (pathname.startsWith('/brand')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/homepages/:path*',
    '/about-us/:path*',
    '/contact-us/:path*',
    '/subscribe-save/:path*',
    '/why-donutland/:path*',
    '/brand/:path*',
  ],
};
