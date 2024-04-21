// NOTE: This file is being used by next-intl package, see next.config.js
import { getRequestConfig } from 'next-intl/server';

// NOTE: This function is being used by next-intl package, see next.config.js
const requestConfig: ReturnType<typeof getRequestConfig> = getRequestConfig(
  async ({ locale }) => ({
    messages: (await import(`public/locales/${locale}.json`)).default,
  }),
);

export default requestConfig;
