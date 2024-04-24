import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import {
  getTranslations,
  unstable_setRequestLocale as unstableSetRequestLocale,
} from 'next-intl/server';

import { locales, metadataAlternatesLanguage } from '@repo/router';
import { envs } from '@repo/utilities/envs';

import { getMessages as getUiMessages } from '@repo/ui/get-messages';

import { getMessages } from '../../get-messages';

import type { Locales } from '@repo/router';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: Locales };
}

export default async function LocaleLayout({
  params: { locale },
  children,
}: LocaleLayoutProps) {
  if (!locales.includes(locale)) notFound();
  unstableSetRequestLocale(locale as string);

  const uiMessages = await getUiMessages(locale).catch(() => notFound());
  const messages = await getMessages(locale).catch(() => notFound());

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={{ ...messages, ...uiMessages }}
    >
      {children}
    </NextIntlClientProvider>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<LocaleLayoutProps, 'children'>): Promise<Metadata> {
  const t = await getTranslations({ locale });
  const websiteName = t('document.title');
  const websiteDescription = t('document.description');
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
      languages: metadataAlternatesLanguage,
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
