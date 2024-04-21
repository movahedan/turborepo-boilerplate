import './globals.css';
import { metadataAlternatesLanguage } from '@repo/intl-router';
import { envs } from '@repo/utilities/envs';
import { Inter } from 'next/font/google';

import { WebVitals } from './web-vitals';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`flex min-h-screen flex-col ${inter.className}`}>
        {children}

        <WebVitals />
      </body>
    </html>
  );
}

export function generateViewport() {
  return {
    themeColor: '#444444',
    viewport:
      'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes,viewport-fit=cover',
  };
}

export function generateMetadata(): Metadata {
  const websiteName = 'my-clicky-game';
  const websiteDescription = 'my-clicky-game';
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
    robots: {
      index: true,
      follow: true,
    },
    icons: [
      { rel: 'shortcut icon', url: '/icons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', url: '/icons/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        url: '/icons/favicon-android-96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '72x72',
        url: '/icons/favicon-android-72.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/icons/favicon-web-32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/icons/favicon-web-16.png',
      },
    ],
  };
}
