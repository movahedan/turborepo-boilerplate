import { screen } from '@testing-library/react';

import { renderWithLocale } from '@repo/utilities-test';

import Page from './page';

jest.mock('next-intl/server', () => ({
  ...jest.requireActual('next-intl/server'),
  unstable_setRequestLocale: jest.fn(),
  getTranslations: jest.fn().mockResolvedValue(
    (key: 'app./.title' | 'app./.description' | 'app./.get-started') =>
      ({
        'app./.title': 'Test Title',
        'app./.description': 'Test Description',
        'app./.get-started': 'Get Started',
      })[key],
  ),
}));

jest.mock('@repo/router', () => ({
  ...jest.requireActual('@repo/router'),
  Link: jest.fn(({ href }) => <div>{href}</div>),
  routes: {
    d: { index: () => '/dashboard' },
  },
}));

jest.mock('@repo/ui/molecules', () => ({
  ...jest.requireActual('@repo/ui/molecules'),
  ChangeLocale: jest.fn(),
}));

describe('<Page />', () => {
  test('renders correctly and fetches translations', async () => {
    const page = await Page({ params: { locale: 'en' } });
    renderWithLocale(page);

    const title = await screen.findByText('Test Title');
    expect(title).toBeInTheDocument();
  });
});
