/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { createI18n } from '@inlang/paraglide-next';

import type { Locales } from './locales';

export const {
  Link,
  middleware,
  useRouter,
  usePathname,
  redirect,
  permanentRedirect,
  localizePath,
} = createI18n<Locales>();
