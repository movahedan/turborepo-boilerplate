'use client';

// import { useEffect } from 'react';

import * as t from '@/translations/messages';
// import { errorHandlerApp } from '@repo/utilities/error-handlers';

import { Button } from '@repo/ui/atoms';

export interface ErrorTemplateProps {
  // error: string | (Error & { digest?: string });
  // reset?: () => void;
}

export default function ErrorTemplate() {
  // useEffect(() => {
  //   errorHandlerApp(error);
  // }, [error]);

  return (
    <div className="my-auto w-full text-center">
      {/* <p>
        {typeof error === 'string'
          ? error
          : error.message || error.digest || t.common_unexpectedError()}
      </p> */}

      <div className="mx-auto mt-2 inline-flex space-x-1">
        {/* {Boolean(reset) && ( */}
        <Button
        // onClick={() => {
        //   reset?.();
        // }}
        >
          {t.common_tryAgain()}
        </Button>
        {/* )} */}
        <Button>{t.common_reload()}</Button>
        <Button>{t.common_goHome()}</Button>
      </div>
    </div>
  );
}
