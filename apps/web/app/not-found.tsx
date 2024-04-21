'use client';

// Do not use @repo/intl-router since at this point there's no locale
import { routes } from '@repo/intl-router';
import { Button } from '@repo/ui/atoms';
import Link from 'next/link';

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
