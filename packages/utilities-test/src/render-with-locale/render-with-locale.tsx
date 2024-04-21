import { render } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import type { RenderOptions, RenderResult } from '@testing-library/react';
import type { ComponentProps } from 'react';

export type RenderWithTheme = (
  elm: React.ReactElement,
  renderOptions?: RenderOptions,
  nextIntlClientProviderProps?: Omit<
    ComponentProps<typeof NextIntlClientProvider>,
    'children'
  >,
) => RenderResult;

export const renderWithLocale: RenderWithTheme = (
  component,
  renderOptions,
  nextIntlClientProviderProps = {
    messages: {},
    locale: 'en',
  },
) => {
  const wrapper: RenderOptions['wrapper'] = ({ children }) => (
    <NextIntlClientProvider {...nextIntlClientProviderProps}>
      {children}
    </NextIntlClientProvider>
  );

  return render(component, {
    wrapper,
    ...renderOptions,
  });
};
