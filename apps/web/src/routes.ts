import type { locales } from '@repo/utilities/locales';
import type { Pathnames } from 'next-intl/navigation';

export const routes = {
  index: () => '/',
  d: {
    index: () => '/d',
  },
};

export const pathnames: Pathnames<typeof locales> = {
  '/': {
    nl: '/',
    en: '/',
  },
} as const satisfies Pathnames<typeof locales>;
export type AppPathnames = keyof typeof pathnames;
