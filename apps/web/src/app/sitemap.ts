import { getPathname, locales, pathnames, defaultLocale } from '@repo/router';
import { envs } from '@repo/utilities/envs';

import type { MetadataRoute } from 'next';

const baseUrl = envs().NEXT_PUBLIC_BASE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const keys = Object.keys(pathnames);

  function getUrl(
    key: keyof typeof pathnames,
    locale: (typeof locales)[number],
  ) {
    const pathname = getPathname({ locale, href: key });
    return `${baseUrl}/${locale}${pathname === '/' ? '' : pathname}`;
  }

  return keys.map((key) => ({
    url: getUrl(key, defaultLocale),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, getUrl(key, locale)]),
      ),
    },
  }));
}
