import { createI18n } from '@inlang/paraglide-next';

import { pathnames } from './routes';
import {
  sourceLanguageTag,
  type AvailableLanguageTag,
} from './translations/runtime';

export const {
  Link,
  middleware,
  useRouter,
  usePathname,
  redirect,
  permanentRedirect,
  localizePath,
} = createI18n<AvailableLanguageTag>({
  pathnames,
  exclude: ['/((?!api|_next/static|_next/image|favicon|manifest))'],
  prefix: 'all',
  defaultLanguage: sourceLanguageTag,
});
