'use client';

import { useReportWebVitals } from 'next/web-vitals';

import { envs } from '@repo/utilities/envs';

export function WebVitals() {
  useReportWebVitals((metric) => {
    if (envs().NODE_ENV === 'production') {
      console.info(metric);
    }
  });

  return null;
}
