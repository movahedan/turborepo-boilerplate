import { initializeLanguage, LanguageProvider } from '@inlang/paraglide-next';
import { cookies, headers } from 'next/headers';
import { notFound } from 'next/navigation';

import * as m from '@/translations/messages';
import {
  availableLanguageTags,
  isAvailableLanguageTag,
  languageTag,
  setLanguageTag,
} from '@/translations/runtime';
import { envs } from '@repo/utilities/envs';

import type { AvailableLanguageTag } from '@/translations/runtime';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

initializeLanguage();

export interface LocaleLayoutProps {
  params: { locale: AvailableLanguageTag };
  children: ReactNode;
}

export default function LocaleLayout({
  params: { locale },
  children,
}: LocaleLayoutProps) {
  // const cookieLang = cookies().get('NEXT_LOCALE')?.value as
  //   | AvailableLanguageTag
  //   | undefined;
  // let lang = cookieLang || locale;
  // // headers().set('x-language-tag', lang);
  // if (isAvailableLanguageTag(lang)) setLanguageTag(() => lang);

  const lang = languageTag();
  console.log('root', { lang });
  if (!availableLanguageTags.includes(lang)) notFound();

  return <LanguageProvider>{children}</LanguageProvider>;
}

export function generateStaticParams() {
  return availableLanguageTags.map((locale) => ({ locale }));
}

export function generateMetadata(): Metadata {
  const websiteName = m.document_title();
  const websiteDescription = m.document_description();

  let websiteUrl;
  const url = envs().NEXT_PUBLIC_BASE_URL;
  if (url) {
    websiteUrl = new URL(url);
  }

  return {
    title: websiteName,
    description: websiteDescription,
    metadataBase: websiteUrl,
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
        'nl-NL': '/nl',
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      siteName: websiteName,
      images: '/icons/favicon.ico',
    },
    manifest: '/manifest.json',
    appleWebApp: {
      capable: true,
      title: websiteName,
      statusBarStyle: 'black-translucent',
    },
  };
}
