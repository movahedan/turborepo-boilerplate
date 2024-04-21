import { notFound } from '@repo/intl-router';

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for not-found page to render.
export default function CatchAllPage() {
  notFound();
}
