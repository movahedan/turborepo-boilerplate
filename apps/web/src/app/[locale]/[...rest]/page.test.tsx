import { notFound } from 'next/navigation';

import CatchAllPage from './page';

jest.mock('next/navigation');
jest.mocked(notFound);

describe('notFound', () => {
  test('it should call the notFound function from next/navigation', () => {
    CatchAllPage();

    expect(notFound).toHaveBeenCalled();
  });
});
