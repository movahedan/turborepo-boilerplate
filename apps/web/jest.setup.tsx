/* eslint-disable no-undef -- jest.setup.ts */
jest.mock('@/navigation', () => ({
  getPathname: jest.fn(),
  usePathname: jest.fn(),
  useRouter: jest.fn().mockImplementation(() => ({
    push: jest.fn(),
    refresh: jest.fn(),
  })),
  Link: jest.fn().mockImplementation(({ children }) => <>{children}</>),
  redirect: jest.fn(),
  permanentRedirect: jest.fn(),
  useLocale: jest.fn(),
}));
