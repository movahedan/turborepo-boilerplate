// Do not use @repo/intl-router since at this point there's no locale
import { redirect } from 'next/navigation';

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect('/en');
}
