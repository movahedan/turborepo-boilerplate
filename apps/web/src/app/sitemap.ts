import { getPathname } from '@/navigation';
import { pathnames } from '@/routes';
import { envs } from '@repo/utilities/envs';
import { locales, defaultLocale } from '@repo/utilities/locales';

import type { MetadataRoute } from 'next';

const baseUrl = envs().NEXT_PUBLIC_BASE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const keys = Object.keys(pathnames);

  function getUrl(
    href: keyof typeof pathnames,
    locale: (typeof locales)[number],
  ) {
    const pathname = getPathname({ locale, href });

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
