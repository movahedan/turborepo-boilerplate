import { useTranslations } from 'next-intl';

import { Link } from '@/navigation';
import { routes } from '@/routes';

import { Button } from '@repo/ui/atoms';

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.
export default function NotFound() {
  const t = useTranslations();

  return (
    <div className="my-auto flex w-full flex-col items-center">
      <h1 className="mb-3 text-3xl">{t('app./404.status')}</h1>
      <h3 className="mb-3 text-xl">{t('app./404.title')}</h3>

      <Link href={routes.index()}>
        <Button className="px-3 py-2">{t('common.go-home')}</Button>
      </Link>
    </div>
  );
}
