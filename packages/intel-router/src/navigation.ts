import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

import { locales } from './locales';
import { pathnames } from './routes';

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
