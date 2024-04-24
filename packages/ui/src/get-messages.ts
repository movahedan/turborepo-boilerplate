import { getMessages as getGenericMessages } from '@repo/router';

import type { Locales } from '@repo/router';

export function getMessages(locale: Locales) {
  return getGenericMessages(`../public/locales/${locale}.json`);
}
