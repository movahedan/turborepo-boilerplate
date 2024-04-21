import { render, screen, fireEvent } from '@testing-library/react';
import * as nextNavigation from 'next/navigation';
import * as nextIntel from 'next-intl';

import { ChangeLocale } from './change-locale';

jest.mock('next-intl', () => ({
  useLocale: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

const spyUsePathname = jest
  .spyOn(nextNavigation, 'usePathname')
  .mockImplementation(() => '/en');
jest
  .spyOn(nextNavigation, 'useSearchParams')
  // @ts-expect-error
  .mockImplementation(() => ({
    get: () => ({ lang: 'en' }),
    toString: () => 'param=value',
  }));
const spyUseLocale = jest.spyOn(nextIntel, 'useLocale');

describe('changeLocale', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render with correct URL for changing locale', () => {
    spyUseLocale.mockReturnValueOnce('en');
    spyUsePathname.mockReturnValueOnce('/en/some-page');

    render(<ChangeLocale />);

    const linkElement = screen.getByLabelText('Change locale to nl');
    expect(linkElement).toHaveAttribute('href', '/nl/some-page?param=value');
  });

  test('should change locale when clicked', () => {
    spyUseLocale.mockReturnValueOnce('nl');
    spyUsePathname.mockReturnValueOnce('/nl/some-page');

    render(<ChangeLocale />);

    const linkElement = screen.getByLabelText('Change locale to en');
    fireEvent.click(linkElement);

    expect(linkElement).toHaveAttribute('href', '/en/some-page?param=value');
  });
});
