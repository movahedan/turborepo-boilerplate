import {
  getTranslations,
  unstable_setRequestLocale as unstableSetRequestLocale,
} from 'next-intl/server';
import { Suspense } from 'react';

import { Link, routes } from '@repo/intl-router';

import { Button } from '@repo/ui/atoms';
import { ChangeLocale } from '@repo/ui/molecules';

import type { Locales } from '@repo/intl-router';

export interface HomePageProps {
  params: { locale: Locales };
}

export default async function HomePage({ params: { locale } }: HomePageProps) {
  unstableSetRequestLocale(locale as string);

  const t = await getTranslations('app./');

  return (
    <div className="m-auto flex size-full items-center justify-center p-4">
      <main className="inline-flex flex-col items-center justify-center">
        <p className="mb-8 text-center text-4xl font-bold leading-tight md:text-5xl">
          {t('title')}
        </p>
        <p className="mb-8 text-center text-xl leading-6 md:text-2xl md:leading-8">
          {t('description')}
        </p>
        <div className="flex items-center gap-4">
          <Link href={routes.d.index()}>
            <Button>{t('get-started')}</Button>
          </Link>
          <Suspense>
            <ChangeLocale className="size-10" />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
