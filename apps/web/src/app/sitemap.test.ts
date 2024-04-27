import { pathnames } from '@/routes';

import sitemap from './sitemap';

import type { Locales } from '@repo/utilities/locales';

jest.mock('@repo/utilities/envs', () => ({
  envs: jest.fn(() => ({ NEXT_PUBLIC_BASE_URL: 'https://test.com' })),
}));
jest.mock('@/navigation', () => ({
  ...jest.requireActual('@/navigation'),
  getPathname: jest.fn(
    ({ locale, href }: { locale: Locales; href: string }) => {
      const pathname = pathnames[href];

      if (typeof pathname === 'string') return pathname;

      return pathname[locale];
    },
  ),
}));
jest.mock('@/routes', () => ({
  ...jest.requireActual('@/routes'),
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

describe('sitemap', () => {
  test('generates correct URLs', () => {
    const result = sitemap();

    expect(result).toEqual([
      {
        url: 'https://test.com/en',
        lastModified: expect.any(Date) as Date,
        alternates: {
          languages: {
            en: 'https://test.com/en',
            nl: 'https://test.com/nl',
          },
        },
      },
      {
        url: 'https://test.com/en/en-sample',
        lastModified: expect.any(Date) as Date,
        alternates: {
          languages: {
            en: 'https://test.com/en/en-sample',
            nl: 'https://test.com/nl/nl-sample',
          },
        },
      },
    ]);
  });
});
