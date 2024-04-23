import { screen, fireEvent } from '@testing-library/react';

import { renderWithLocale } from '@repo/utilities-test';

import { ErrorTemplate } from './error-template';

import type { ErrorTemplateProps } from './error-template';

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: jest.fn().mockImplementation(() => ({
    refresh: () => {
      console.info('refresh');
    },
  })),
}));

describe('<ErrorTemplate />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  jest.spyOn(console, 'error').mockImplementation(() => {});
  const spyConsole = jest.spyOn(console, 'info').mockImplementation(() => {});

  const renderComponent = (props: Partial<ErrorTemplateProps> = {}) =>
    renderWithLocale(
      <ErrorTemplate error="test error message" {...props} />,
      {},
      {
        locale: 'en',
        messages: {
          common: {
            'unexpected-error': 'Unexpected error occurred',
            'try-again': 'Try again',
            reload: 'Reload',
            'go-home': 'Go home',
          },
        },
      },
    );

  test('should render error message', () => {
    renderComponent();

    expect(screen.getByText('test error message')).toBeInTheDocument();
  });

  test('should render translated error message', () => {
    renderComponent({ error: { message: '', digest: undefined, name: '' } });

    expect(screen.getByText('Unexpected error occurred')).toBeInTheDocument();
  });

  test('should call reset function on button click', () => {
    const resetMock = jest.fn();
    renderComponent({ error: 'test error message', reset: resetMock });

    fireEvent.click(screen.getByText('Try again'));

    expect(resetMock).toHaveBeenCalledTimes(1);
  });

  test('should call router refresh on reload button click', () => {
    renderComponent({ error: 'test error message' });

    fireEvent.click(screen.getByText('Reload'));
    expect(spyConsole).toHaveBeenCalledTimes(1);
  });
});
