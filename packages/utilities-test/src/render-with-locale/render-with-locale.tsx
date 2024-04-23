import { render } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import { defaultLocale } from '@repo/intl-router';

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
      {...nextIntlClientProviderProps}
      locale={nextIntlClientProviderProps.locale || defaultLocale}
    >
      {children}
    </NextIntlClientProvider>
  );

  return render(component, {
    wrapper,
    ...renderOptions,
  });
};
