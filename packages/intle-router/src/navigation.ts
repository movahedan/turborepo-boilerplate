import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

import { locales } from './locales';
import { pathnames } from './routes';

import type { Pathnames } from 'next-intl/navigation';

export { notFound } from 'next/navigation';

// @ts-expect-error we don't have these types
const navigation: ReturnType<typeof createLocalizedPathnamesNavigation> =
  createLocalizedPathnamesNavigation<typeof locales, Pathnames<typeof locales>>(
    {
      locales,
      pathnames,
    },
  );

export const useRouter: typeof navigation.useRouter = navigation.useRouter;
export const usePathname = navigation.usePathname;
export const redirect: typeof navigation.redirect = navigation.redirect;
export const Link: typeof navigation.Link = navigation.Link;
