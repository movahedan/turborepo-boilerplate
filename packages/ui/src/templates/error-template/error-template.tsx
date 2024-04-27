'use client';

import { useEffect } from 'react';

import * as t from '@/translations/messages';
import { errorHandlerApp } from '@repo/utilities/error-handlers';

import { Button } from '../../atoms';

export interface ErrorTemplateProps {
  error: string | (Error & { digest?: string });
  // reset?: () => void;
}

export function ErrorTemplate({ error }: ErrorTemplateProps) {
  useEffect(() => {
    errorHandlerApp(error);
  }, [error]);

  return (
    <div className="my-auto w-full text-center">
      <p>
        {typeof error === 'string'
          ? error
          : error.message ||
            error.digest ||
            t.ui_templates_errorTemplate_unexpectedError()}
      </p>

      <div className="mx-auto mt-2 inline-flex space-x-1">
        {/* {Boolean(reset) && ( */}
        <Button
        // onClick={() => {
        //   reset?.();
        // }}
        >
          {t.ui_templates_errorTemplate_tryAgain()}
        </Button>
        {/* )} */}
        <Button>{t.ui_templates_errorTemplate_reload()}</Button>
        <Button>{t.ui_templates_errorTemplate_goHome()}</Button>
      </div>
    </div>
  );
}
