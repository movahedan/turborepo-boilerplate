/* eslint-disable i18next/no-literal-string -- the file is outside of the [locale]*/
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { errorHandlerApp } from '@repo/utilities/error-handlers';

import { Button } from '@repo/ui/atoms';

import { routes } from '@/routes';

export interface ErrorTemplateProps {
  error: string | (Error & { digest?: string });
  reset?: () => void;
}

export default function ErrorTemplate({ error, reset }: ErrorTemplateProps) {
  const router = useRouter();

  useEffect(() => {
    errorHandlerApp(error);
  }, [error]);

  return (
    <div className="my-auto w-full text-center">
      <p>
        {typeof error === 'string'
          ? error
          : error.message || error.digest || 'An unexpected error ocurred.'}
      </p>

      <div className="mx-auto mt-2 inline-flex space-x-1">
        {Boolean(reset) && (
          <Button
            onClick={() => {
              reset?.();
            }}
          >
            Try again
          </Button>
        )}
        <Button
          onClick={() => {
            router.refresh();
          }}
        >
          Reload
        </Button>
        <Link href={routes.index()}>
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
