'use client';

import { locales } from '@repo/intl-router';
import { classNames } from '@repo/utilities/string';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useMemo } from 'react';

export interface ChangeLocaleProps {
  className?: string;
}

export function ChangeLocale({ className }: ChangeLocaleProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const otherLocale = useMemo(
    () => locales.find((l) => l !== locale),
    [locale],
  );

  const url = useMemo(() => {
    const pageUrl = pathname.split('/').slice(2).join('/');
    const fullUrl = [pageUrl, searchParams.toString()].join('?');
    const localizedUrl = `/${otherLocale}/${fullUrl}`;

    return localizedUrl;
  }, [otherLocale, pathname, searchParams]);

  return (
    <Link
      aria-label={`Change locale to ${otherLocale}`}
      className={className}
      href={url}
    >
      <Image
        alt={`Change locale to ${otherLocale}`}
        className={classNames([
          'rounded-full hover:scale-125 hover:cursor-pointer border border-transparent',
          'hover:border-gray-400 hover:bg-gray-400 dark:hover:border-gray-200',
          'transition-all duration-300',
        ])}
        height={64}
        src={`/images/flag-${otherLocale}.webp`}
        width={64}
      />
    </Link>
  );
}
