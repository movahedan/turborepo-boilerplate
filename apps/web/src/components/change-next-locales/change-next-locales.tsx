'use client';
import { useSearchParams } from 'next/navigation';

import { useLocale, usePathname, useRouter } from '@/navigation';
import { classNames } from '@repo/utilities/string';

import { ChangeLocale } from '@repo/ui/molecules';

export type ChangeNextLocaleProps = Readonly<{
  className?: string;
}>;

export function ChangeNextLocale({ className }: ChangeNextLocaleProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <ChangeLocale
      className={classNames(['size-10', className])}
      locale={locale}
      onChange={(newLocale) => {
        router.push(`${pathname}?${searchParams.toString()}`, {
          locale: newLocale,
        });
      }}
    />
  );
}
