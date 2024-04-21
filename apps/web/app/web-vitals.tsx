'use client';

import { envs } from '@repo/utilities/envs';
import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    if (envs().NODE_ENV === 'production') {
      console.info(metric);
    }
  });

  return null;
}
