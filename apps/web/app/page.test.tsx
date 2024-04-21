import { render, screen } from '@testing-library/react';

import page from './page';

describe('<Page />', () => {
  test('should render successfully', () => {
    render(page());

    const pageElement = screen.getByText('examples/basic');
    expect(pageElement).toBeInTheDocument();
  });
});
