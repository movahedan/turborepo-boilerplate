import type { locales } from './locales';
import type { Pathnames } from 'next-intl/navigation';

export const routes = {
  index: () => '/',
  d: {
    index: () => '/d',
    settings: () => '/d/settings',
    alert: (id: string) => `/d/lanes/alerts/${id}`,
    lane: (id: string) => ({
      performance: () => `/d/lane/${id}/performance`,
      alerts: () => `/d/lane/${id}/alerts`,
    }),
    lanes: {
      performance: () => '/d/lanes/performance',
      alerts: () => '/d/lanes/alerts',
    },
  },
};

export const pathnames: Pathnames<typeof locales> = {
  '/': {
    nl: '/',
    en: '/',
  },
} satisfies Pathnames<typeof locales>;
export type AppPathnames = keyof typeof pathnames;
