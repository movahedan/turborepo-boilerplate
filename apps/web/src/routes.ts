import type { AvailableLanguageTag } from './translations/runtime';

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

export const pathnames: Record<string, Record<AvailableLanguageTag, string>> = {
  '/': {
    nl: '/',
    en: '/',
  },
};
export type AppPathnames = keyof typeof pathnames;
