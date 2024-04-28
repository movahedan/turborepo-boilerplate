import { screen, fireEvent } from '@testing-library/react';

import { renderWithLocale } from '@repo/utilities-test';

import { ErrorTemplateNext } from './error-template-next';

import type { ErrorTemplateProps } from './error-template-next';

jest.mock('@/navigation', () => ({
  ...jest.requireActual('@/navigation'),
  useRouter: jest.fn().mockImplementation(() => ({
    refresh: () => {
      console.info('refresh');
    },
  })),
}));

describe('<ErrorTemplateNext />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  jest.spyOn(console, 'error').mockImplementation(() => {});
  const spyConsole = jest.spyOn(console, 'info').mockImplementation(() => {});

  const testErrorMessage = 'test error message';
  const renderComponent = (props: Partial<ErrorTemplateProps> = {}) =>
    renderWithLocale(
      <ErrorTemplateNext error={testErrorMessage} {...props} />,
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

    expect(screen.getByText(testErrorMessage)).toBeInTheDocument();
  });

  test('should render translated error message', () => {
    renderComponent({ error: { message: '', digest: undefined, name: '' } });

    expect(screen.getByText('Unexpected error occurred')).toBeInTheDocument();
  });

  test('should call reset function on button click', () => {
    const resetMock = jest.fn();
    renderComponent({ error: testErrorMessage, reset: resetMock });

    fireEvent.click(screen.getByText('Try again'));

    expect(resetMock).toHaveBeenCalledTimes(1);
  });

  test('should call router refresh on reload button click', () => {
    renderComponent({ error: testErrorMessage });

    fireEvent.click(screen.getByText('Reload'));
    expect(spyConsole).toHaveBeenCalledTimes(1);
  });
});
