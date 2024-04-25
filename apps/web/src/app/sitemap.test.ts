import { pathnames } from '@repo/router';

import sitemap from './sitemap';

import type { Locales } from '@repo/router/src/locales';

jest.mock('@repo/router', () => ({
  ...jest.requireActual('@repo/router'),
  getPathname: jest.fn(
    ({ locale, href }: { locale: Locales; href: string }) => {
      const pathname = pathnames[href];

      if (typeof pathname === 'string') return pathname;

      return pathname[locale];
    },
  ),
  pathnames: {
    '/': {
      nl: '/',
      en: '/',
    },
    '/sample': {
      nl: '/nl-sample',
      en: '/en-sample',
    },
  },
}));

jest.mock('@repo/utilities/envs', () => ({
  envs: jest.fn(() => ({ NEXT_PUBLIC_BASE_URL: 'https://example.com' })),
}));

describe('sitemap', () => {
  test('generates correct URLs', () => {
    const result = sitemap();

    expect(result).toEqual([
      {
        url: 'https://example.com/en',
        lastModified: expect.any(Date) as Date,
        alternates: {
          languages: {
            en: 'https://example.com/en',
            nl: 'https://example.com/nl',
          },
        },
      },
      {
        url: 'https://example.com/en/en-sample',
        lastModified: expect.any(Date) as Date,
        alternates: {
          languages: {
            en: 'https://example.com/en/en-sample',
            nl: 'https://example.com/nl/nl-sample',
          },
        },
      },
    ]);
  });
});
