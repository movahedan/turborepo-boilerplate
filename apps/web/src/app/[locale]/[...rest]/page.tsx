import { notFound } from 'next/navigation';

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for not-found page to render.
export default function CatchAllPage() {
  notFound();
}
