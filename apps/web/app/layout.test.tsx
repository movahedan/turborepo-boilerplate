import * as envs from '@repo/utilities/envs';

import Layout, { generateViewport, generateMetadata } from './layout';

jest.mock('@repo/utilities/envs', () => ({
  envs: jest.fn(),
}));

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
  const spyEnvs = jest.spyOn(envs, 'envs');

  const expectedMetadata = {
    title: 'my-clicky-game',
    description: 'my-clicky-game',
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
      siteName: 'my-clicky-game',
      images: '/icons/favicon.ico',
    },
    manifest: '/manifest.json',
    appleWebApp: {
      capable: true,
      title: 'my-clicky-game',
      statusBarStyle: 'black-translucent',
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: [
      { rel: 'shortcut icon', url: '/icons/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/icons/favicon.ico',
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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('returns expected metadata with undefined values', () => {
    spyEnvs.mockReturnValue({
      NODE_ENV: 'production',
      BUNDLE_ANALYZER: false,
      NEXT_PUBLIC_BASE_URL: '',
    });

    const expected = {
      ...expectedMetadata,
      metadataBase: undefined,
    };

    expect(generateMetadata()).toEqual(expected);
  });

  test('returns expected metadata values', () => {
    spyEnvs.mockReturnValue({
      NODE_ENV: 'production',
      BUNDLE_ANALYZER: false,
      NEXT_PUBLIC_BASE_URL: 'https://localhost:3000',
    });

    const expected = {
      ...expectedMetadata,
      metadataBase: new URL('https://localhost:3000'),
    };

    expect(generateMetadata()).toEqual(expected);
  });
});
