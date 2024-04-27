import { screen, fireEvent } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { useLocale, usePathname, useRouter } from '@/navigation';
import { renderWithLocale } from '@repo/utilities-test';

import { ChangeNextLocale } from './change-next-locales';

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useSearchParams: jest.fn().mockImplementation(() => ({
    get: () => ({ lang: 'en' }),
    toString: () => 'param=value',
  })),
}));

const push = jest.fn();
(usePathname as jest.Mock).mockReturnValue('/test');
(useRouter as jest.Mock).mockImplementation(() => ({
  push,
}));

describe('<ChangeNextLocale />', () => {
  test('should render with correct URL for changing locale', async () => {
    (useLocale as jest.Mock).mockReturnValueOnce('en');

    renderWithLocale(<ChangeNextLocale />);

    const linkElement = screen.getByLabelText('Change locale to nl');
    await userEvent.click(linkElement);

    expect(push).toHaveBeenCalledWith('/test?param=value', {
      locale: 'nl',
    });
  });

  test('should change locale when clicked', () => {
    (useLocale as jest.Mock).mockReturnValueOnce('nl');

    renderWithLocale(<ChangeNextLocale />);

    const linkElement = screen.getByLabelText('Change locale to en');
    fireEvent.click(linkElement);

    expect(push).toHaveBeenCalledWith('/test?param=value', {
      locale: 'en',
    });
  });
});
