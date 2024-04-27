import { useLocale as useLocaleIntl } from 'next-intl';
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

import { locales } from '@repo/utilities/locales';

import { pathnames } from './routes';

import type { Locales } from '@repo/utilities/locales';

export const useLocale: () => Locales = useLocaleIntl as () => Locales;
export const {
  getPathname,
  usePathname,
  useRouter,
  Link,
  redirect,
  permanentRedirect,
} = createLocalizedPathnamesNavigation({
  locales,
  pathnames,
});
