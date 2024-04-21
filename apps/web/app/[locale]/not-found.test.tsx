import { renderWithLocale } from '@repo/utilities-test/src/render-with-locale';
import { screen } from '@testing-library/react';

import NotFound from './not-found';

describe('notFound', () => {
  const renderComponent = () =>
    renderWithLocale(
      <NotFound />,
      {},
      {
        locale: 'en',
        messages: {
          common: { 'go-home': 'Go Home' },
          app: {
            '/404': {
              status: '404',
              title: 'Not Found!',
            },
          },
        },
      },
    );

  test('renders the 404 page with "Not Found!" message and a "Go Home" button', () => {
    renderComponent();

    const goHomeButton = screen.getByRole('button', { name: 'Go Home' });
    expect(goHomeButton).toBeInTheDocument();
  });
});
