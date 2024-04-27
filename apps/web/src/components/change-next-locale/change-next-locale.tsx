'use client';
import { Suspense } from 'react';

import { languageTag } from '@/translations/runtime';

import { ChangeLocale } from '@repo/ui/molecules';

import { usePathname, useRouter } from '@/navigation';

export function ChangeNextLocale() {
  const router = useRouter();
  const href = usePathname();

  console.log({ tag: languageTag() });

  return (
    <Suspense>
      <ChangeLocale
        className="size-10"
        onChange={(locale) => {
          router.push(href, { locale });
        }}
      />
    </Suspense>
  );
}
