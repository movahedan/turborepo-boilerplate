// NOTE: This file is being used by next-intl package, see next.config.js
import { getRequestConfig } from 'next-intl/server';

import { getMessages } from './get-messages';

import type { Locales } from './locales';

// NOTE: This function is being used by next-intl package, see next.config.js
const requestConfig: ReturnType<typeof getRequestConfig> = getRequestConfig(
  async ({ locale }) => ({
    messages: await getMessages(locale as Locales),
  }),
);

export default requestConfig;
