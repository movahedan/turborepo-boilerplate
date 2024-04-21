import { pathnames, locales, defaultLocale } from '@repo/intl-router';
import createMiddleware from 'next-intl/middleware';

const middleware = createMiddleware({
  defaultLocale,
  locales,
  pathnames,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|nl)/:path*'],
};

export default middleware;
