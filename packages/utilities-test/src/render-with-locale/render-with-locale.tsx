import { render } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import { defaultLocale } from '@repo/utilities/locales';

import type { RenderOptions, RenderResult } from '@testing-library/react';
import type { ComponentProps } from 'react';

export type RenderWithLocale = (
  elm: React.ReactElement,
  renderOptions?: RenderOptions,
  nextIntlClientProviderProps?: Omit<
    ComponentProps<typeof NextIntlClientProvider>,
    'children'
  >,
) => RenderResult;

export const renderWithLocale: RenderWithLocale = (
  component,
  renderOptions,
  nextIntlClientProviderProps = {
    messages: {},
    locale: defaultLocale,
  },
) => {
  const wrapper: RenderOptions['wrapper'] = ({ children }) => (
    <NextIntlClientProvider
      locale={nextIntlClientProviderProps.locale || defaultLocale}
      messages={nextIntlClientProviderProps.messages || {}}
    >
      {children}
    </NextIntlClientProvider>
  );

  return render(component, {
    wrapper,
    ...renderOptions,
  });
};
