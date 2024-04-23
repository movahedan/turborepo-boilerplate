import { renderWithLocale } from '@repo/utilities-test';

import GlobalError from './global-error';

jest.spyOn(console, 'error').mockImplementation(() => {});
jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
  usePathname: jest.fn(),
  useRouter: jest.fn().mockImplementation(() => ({
    refresh: () => {
      console.info('refresh');
    },
  })),
}));

describe('<GlobalError />', () => {
  const renderComponent = () =>
    renderWithLocale(<GlobalError error="test error message" />);

  test('renders GlobalError without crashing', () => {
    const { baseElement } = renderComponent();

    expect(baseElement).toBeInTheDocument();
  });
});
