'use client';

import Image from 'next/image';

import {
  availableLanguageTags,
  languageTag,
  sourceLanguageTag,
} from '@/translations/runtime';
import { classNames } from '@repo/utilities/string';

import { Button } from '../../atoms';

import type { AvailableLanguageTag } from '@/translations/runtime';

export interface ChangeLocaleProps {
  onChange: (locale: AvailableLanguageTag) => void;
  className?: string;
}

export function ChangeLocale({ onChange, className }: ChangeLocaleProps) {
  const tags = availableLanguageTags;
  const defaultTag = sourceLanguageTag;
  const currentTag = languageTag();
  const newTag = tags.find((l) => l !== currentTag) || defaultTag;

  return (
    <Button
      aria-label={`Change locale to ${newTag}`}
      className={className}
      onClick={() => {
        onChange(newTag);
      }}
    >
      <Image
        alt={`Change locale to ${newTag}`}
        className={classNames([
          'rounded-full hover:scale-125 hover:cursor-pointer border border-transparent',
          'hover:border-gray-400 hover:bg-gray-400 dark:hover:border-gray-200',
          'transition-all duration-300',
        ])}
        height={64}
        src={`/images/flag-${newTag}.webp`}
        width={64}
      />
    </Button>
  );
}
