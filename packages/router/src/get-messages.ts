import type { Locales } from './locales';
import type { AbstractIntlMessages } from 'next-intl';

export const getMessages = (locale: Locales) =>
  import(`../../public/locales/${locale}.json`)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- It's just a json
    .then((json) => json.default as AbstractIntlMessages);
