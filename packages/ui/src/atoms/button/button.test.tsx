import { render, screen } from '@testing-library/react';

import { Button } from './button';

describe('<Button />', () => {
  test('should render successfully', () => {
    render(<Button dataTestId="button">Text</Button>);

    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
  });
});
