import { fireEvent, render, screen } from '@testing-library/react';

import GlobalError from './global-error';

import type { ErrorTemplateProps } from './global-error';

jest.spyOn(console, 'error').mockImplementation(() => {});
const spyConsole = jest.spyOn(console, 'info').mockImplementation(() => {});
jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: jest.fn().mockImplementation(() => ({
    refresh: () => {
      console.info('refresh');
    },
  })),
}));

describe('<GlobalError />', () => {
  const renderComponent = (props: Partial<ErrorTemplateProps> = {}) =>
    render(<GlobalError error="test error message" {...props} />);

  test('should render translated error message', () => {
    renderComponent({ error: { message: '', digest: undefined, name: '' } });

    expect(
      screen.getByText('An unexpected error ocurred.'),
    ).toBeInTheDocument();
  });

  test('should render error message and call reset/reload function on button click', () => {
    const resetMock = jest.fn();
    renderComponent({ error: 'test error message', reset: resetMock });

    expect(screen.getByText('test error message')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Try again'));

    expect(resetMock).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText('Reload'));
    expect(spyConsole).toHaveBeenCalledTimes(1);
  });
});
