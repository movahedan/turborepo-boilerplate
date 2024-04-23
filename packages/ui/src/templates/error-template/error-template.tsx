'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

import { Link, routes, useRouter } from '@repo/router';
import { errorHandlerApp } from '@repo/utilities/error-handlers';

import { Button } from '@repo/ui/atoms';

export interface ErrorTemplateProps {
  error: string | (Error & { digest?: string });
  reset?: () => void;
}

export function ErrorTemplate({ error, reset }: ErrorTemplateProps) {
  const t = useTranslations();
  const router = useRouter();

  useEffect(() => {
    errorHandlerApp(error);
  }, [error]);

  return (
    <div className="my-auto w-full text-center">
      <p>
        {typeof error === 'string'
          ? error
          : error.message || error.digest || t('common.unexpected-error')}
      </p>

      <div className="mx-auto mt-2 inline-flex space-x-1">
        {Boolean(reset) && (
          <Button
            onClick={() => {
              reset?.();
            }}
          >
            {t('common.try-again')}
          </Button>
        )}
        <Button
          onClick={() => {
            router.refresh();
          }}
        >
          {t('common.reload')}
        </Button>
        <Link href={routes.index()}>
          <Button>{t('common.go-home')}</Button>
        </Link>
      </div>
    </div>
  );
}
