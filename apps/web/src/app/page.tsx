import { redirect } from 'next/navigation';

import { defaultLocale } from '@repo/intl-router';

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
