import { createI18n } from '@inlang/paraglide-next';

import type { AvailableLanguageTag } from './translations/runtime';

export const { Link, useRouter, usePathname, localizePath } =
  createI18n<AvailableLanguageTag>();
