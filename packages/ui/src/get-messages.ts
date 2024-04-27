import type { Locales } from '@repo/utilities/locales';
import type { AbstractIntlMessages } from 'next-intl';

export function getMessages(locale: Locales) {
  return import(`../public/locales/${locale}.json`).then(
    (json) => (json as { default: AbstractIntlMessages }).default,
  );
}
