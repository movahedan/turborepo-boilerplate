import {
  availableLanguageTags,
  sourceLanguageTag,
} from '@/translations/runtime';
import { envs } from '@repo/utilities/envs';

import { pathnames } from '@/routes';

import type { AvailableLanguageTag } from '@/translations/runtime';
import type { MetadataRoute } from 'next';

const baseUrl = envs().NEXT_PUBLIC_BASE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const keys = Object.keys(pathnames);

  function getUrl(key: string, locale: AvailableLanguageTag) {
    return `${baseUrl}/${locale}${pathnames[key][locale] === '/' ? '' : pathnames[key][locale]}`;
  }

  return keys.map((key) => ({
    url: getUrl(key, sourceLanguageTag),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        availableLanguageTags.map((locale) => [locale, getUrl(key, locale)]),
      ),
    },
  }));
}
