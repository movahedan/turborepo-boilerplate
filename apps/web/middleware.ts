import createMiddleware from 'next-intl/middleware';

import { pathnames } from '@/routes';
import { locales, defaultLocale } from '@repo/utilities/locales';

const middleware = createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localeDetection: true,
  alternateLinks: true,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|nl)/:path*'],
};

export default middleware;
