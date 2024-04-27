'use client';

import Image from 'next/image';

import { locales } from '@repo/utilities/locales';
import { classNames } from '@repo/utilities/string';

import { Button } from '../../atoms';

import type { Locales } from '@repo/utilities/locales';

export interface ChangeLocaleProps {
  locale: Locales;
  onChange: (locale?: Locales) => unknown;
  className?: string;
}

export function ChangeLocale({
  locale,
  onChange,
  className,
}: ChangeLocaleProps) {
  const newLocale = locales.find((l) => l !== locale);

  return (
    <Button
      aria-label={`Change locale to ${newLocale}`}
      className={className}
      onClick={() => onChange(newLocale)}
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
    </Button>
  );
}
