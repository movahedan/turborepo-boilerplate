import { redirect } from 'next/navigation';

import page from './page';

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  redirect: jest.fn(),
}));
const mockedRedirect = jest.mocked(redirect);

describe('<Page />', () => {
  test('should render successfully', () => {
    page();

    expect(mockedRedirect).toHaveBeenCalledWith('/en');
  });
});
