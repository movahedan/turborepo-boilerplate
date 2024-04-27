import { screen } from '@testing-library/react';

import { renderWithLocale } from '@repo/utilities-test';

import Page from './page';

// jest.mock('@/navigation', () => ({
//   ...jest.requireActual('@/navigation'),
//   Link: jest.fn(({ href }) => <div>{href}</div>),
//   routes: {
//     d: { index: () => '/dashboard' },
//   },
// }));

jest.mock('@repo/ui/molecules', () => ({
  ...jest.requireActual('@repo/ui/molecules'),
  ChangeLocale: jest.fn(),
}));

describe('<Page />', () => {
  test('renders correctly and fetches translations', async () => {
    const page = Page();
    renderWithLocale(page);

    const title = await screen.findByText('Test Title');
    expect(title).toBeInTheDocument();
  });
});
