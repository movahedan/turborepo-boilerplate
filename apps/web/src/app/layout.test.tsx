import { envs } from '@repo/utilities/envs';

import Layout, { generateViewport, generateMetadata } from './layout';

jest.mock('@repo/utilities/envs', () => ({
  envs: jest.fn(),
}));
const mockedEnvs = jest.mocked(envs);

describe('<Layout />', () => {
  test('should render successfully', () => {
    const element = Layout({
      children: <p data-testid="layout-content">children</p>,
    });

    expect(element).toBeTruthy();
  });
});

describe('generateViewport', () => {
  test('returns expected viewport values', () => {
    const expectedViewport = {
      themeColor: '#444444',
      viewport:
        'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes,viewport-fit=cover',
    };

    expect(generateViewport()).toEqual(expectedViewport);
  });
});

describe('generateMetadata', () => {
  const title = 'my-clicky-game';
  const favIcon = '/icons/favicon.ico';

  const expectedMetadata = {
    title,
    description: title,
    metadataBase: undefined,
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
        'nl-NL': '/nl',
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      siteName: title,
      images: favIcon,
    },
    manifest: '/manifest.json',
    appleWebApp: {
      capable: true,
      title,
      statusBarStyle: 'black-translucent',
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: [
      { rel: 'shortcut icon', url: favIcon },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: favIcon,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        url: '/icons/favicon-android-96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '72x72',
        url: '/icons/favicon-android-72.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/icons/favicon-web-32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/icons/favicon-web-16.png',
      },
    ],
  };

  test('returns expected metadata with undefined values', () => {
    mockedEnvs.mockImplementationOnce(() => ({
      NODE_ENV: 'production',
      BUNDLE_ANALYZER: false,
      NEXT_PUBLIC_BASE_URL: '',
    }));

    const expected = {
      ...expectedMetadata,
      metadataBase: undefined,
    };

    expect(generateMetadata()).toEqual(expected);
  });

  test('returns expected metadata values', () => {
    mockedEnvs.mockImplementationOnce(() => ({
      NODE_ENV: 'production',
      BUNDLE_ANALYZER: false,
      NEXT_PUBLIC_BASE_URL: 'https://domain.com',
    }));

    const expected = {
      ...expectedMetadata,
      metadataBase: new URL('https://domain.com'),
    };

    expect(generateMetadata()).toEqual(expected);
  });
});
