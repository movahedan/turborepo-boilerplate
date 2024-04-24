import type { Locales } from '@repo/router';
import type { AbstractIntlMessages } from 'next-intl';

export async function getMessages(locale: Locales) {
  return import(`@repo/web/public/locales/${locale}.json`).then(
    (json) => (json as { default: AbstractIntlMessages }).default,
  );
}
