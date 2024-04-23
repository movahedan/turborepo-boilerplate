'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';

import { Link, locales, usePathname } from '@repo/router';
import { classNames } from '@repo/utilities/string';

export interface ChangeLocaleProps {
  className?: string;
}

export function ChangeLocale({ className }: ChangeLocaleProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const newLocale = locales.find((l) => l !== locale);

  return (
    <Link
      aria-label={`Change locale to ${newLocale}`}
      className={className}
      href={{ pathname, search: searchParams.toString() }}
      locale={newLocale}
    >
      <Image
        alt={`Change locale to ${newLocale}`}
        className={classNames([
          'rounded-full hover:scale-125 hover:cursor-pointer border border-transparent',
          'hover:border-gray-400 hover:bg-gray-400 dark:hover:border-gray-200',
          'transition-all duration-300',
        ])}
        height={64}
        src={`/images/flag-${newLocale}.webp`}
        width={64}
      />
    </Link>
  );
}
