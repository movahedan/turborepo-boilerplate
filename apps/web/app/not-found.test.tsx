import { render, screen } from '@testing-library/react';

import NotFound from './not-found';

describe('notFound', () => {
  test('renders the 404 page with "Not Found!" message and a "Go Home" button', () => {
    render(<NotFound />);

    expect(screen.getByText('Not Found!')).toBeInTheDocument();

    const goHomeButton = screen.getByRole('button', { name: 'Go Home' });
    expect(goHomeButton).toBeInTheDocument();
  });
});
