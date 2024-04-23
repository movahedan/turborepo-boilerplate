// NOTE: This file is being used by next-intl package, see next.config.js
import { getRequestConfig } from 'next-intl/server';

// NOTE: This function is being used by next-intl package, see next.config.js
const requestConfig: ReturnType<typeof getRequestConfig> = getRequestConfig(
  async ({ locale }) => ({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- It's just a json
    messages: (await import(`./public/locales/${locale}.json`)).default,
  }),
);

export default requestConfig;
