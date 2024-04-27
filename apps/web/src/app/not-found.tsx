/* eslint-disable i18next/no-literal-string -- the file is outside of the [locale]*/
'use client';

// Do not use @repo/utilities/locales since at this point there's no locale
import Link from 'next/link';

import { routes } from '@/routes';

import { Button } from '@repo/ui/atoms';

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.
export default function NotFound() {
  return (
    <div className="my-auto flex w-full flex-col items-center">
      <h1 className="mb-16 text-3xl">404</h1>
      <h3 className="mb-16 text-xl">Not Found!</h3>

      <Link aria-label="Go Home" href={routes.index()}>
        <Button className="px-16 py-8">Go Home</Button>
      </Link>
    </div>
  );
}
