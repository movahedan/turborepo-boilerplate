import { screen } from '@testing-library/react';

import { renderWithLocale } from '@repo/utilities-test';

import Page from './page';

jest.mock('next-intl/server', () => ({
  ...jest.requireActual('next-intl/server'),
  getTranslations: jest.fn().mockResolvedValue(
    (key: 'title' | 'description' | 'get-started') =>
      ({
        title: 'Test Title',
        description: 'Test Description',
        'get-started': 'Get Started',
      })[key],
  ),
  unstable_setRequestLocale: jest.fn(),
}));

jest.mock('@repo/intl-router', () => ({
  ...jest.requireActual('@repo/intl-router'),
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
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly and fetches translations', async () => {
    const page = await Page({ params: { locale: 'en' } });
    renderWithLocale(page);

    const title = await screen.findByText('Test Title');
    expect(title).toBeInTheDocument();
  });
});
