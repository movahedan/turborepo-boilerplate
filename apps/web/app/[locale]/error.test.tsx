import { renderWithLocale } from '@repo/utilities-test/render-with-locale';

import Error from './error';

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

describe('<Error />', () => {
  const renderComponent = () =>
    renderWithLocale(<Error error="test error message" />);

  test('renders Error without crashing', () => {
    const { baseElement } = renderComponent();

    expect(baseElement).toBeInTheDocument();
  });
});
