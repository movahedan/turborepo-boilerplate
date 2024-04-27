// import { ChangeNextLocale } from '@/components/change-next-locale';
import * as m from '@/translations/messages';

import { Button } from '@repo/ui/atoms';

import { Link } from '@/navigation';
import { routes } from '@/routes';

export default function HomePage() {
  return (
    <div className="m-auto flex size-full items-center justify-center p-4">
      <main className="inline-flex flex-col items-center justify-center">
        <p className="mb-8 text-center text-4xl font-bold leading-tight md:text-5xl">
          {m.app_index_title()}
        </p>
        <p className="mb-8 text-center text-xl leading-6 md:text-2xl md:leading-8">
          {m.app_index_description()}
        </p>
        <div className="flex items-center gap-4">
          <Link href={routes.d.index()}>
            <Button>{m.app_index_getStarted()}</Button>
          </Link>
          {/* <ChangeNextLocale /> */}
        </div>
      </main>
    </div>
  );
}
