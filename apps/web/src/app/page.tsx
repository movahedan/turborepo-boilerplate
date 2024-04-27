import { redirect } from 'next/navigation';

import { sourceLanguageTag } from '@/translations/runtime';

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect(`/${sourceLanguageTag}`);
}
