import { notFound } from '@repo/intl-router';
import * as envs from '@repo/utilities/envs';
import { render, screen } from '@testing-library/react';

import Layout, { generateMetadata, generateStaticParams } from './layout';

jest.mock('@repo/utilities/envs', () => ({
  envs: jest.fn(),
}));

jest.mock('next-intl/server', () => ({
  ...jest.requireActual('next-intl/server'),
  unstable_setRequestLocale: jest.fn(),
  getTranslations: jest.fn().mockResolvedValue(() => 'title'),
}));

jest.mock('@repo/intl-router', () => ({
  ...jest.requireActual('@repo/intl-router'),
  notFound: jest.fn(),
}));

jest.mock('../../public/locales/en.json', () => ({ default: {} }));
jest.mock('../../public/locales/nl.json', () => ({ default: {} }));

describe('<Layout />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders children with NextIntlProvider', async () => {
    const layout = await Layout({
      params: { locale: 'en' },
      children: <div>Child Component</div>,
    });

    expect(layout).toBeTruthy();
  });

  test('renders children wrapped in NextIntlClientProvider after setting request locale', async () => {
    const layout = await Layout({
      params: { locale: 'en' },
      children: <div data-testid="test-child">Test Child</div>,
    });
    render(layout);

    // Verify that unstable_setRequestLocale is called with the provided locale
    // expect(unstableSetRequestLocale).toHaveBeenCalledWith('en');

    const testChild = await screen.findByTestId('test-child');
    expect(testChild).toBeInTheDocument();
  });

  test('calls notFound when provided locale is not included in supported locales', async () => {
    const layout = await Layout({
      params: { locale: 'es' as never },
      children: <div data-testid="test-child">Test Child</div>,
    });
    render(layout);

    expect(notFound).toHaveBeenCalled();
  });
});

describe('generateMetadata', () => {
  const spyEnvs = jest.spyOn(envs, 'envs');

  const expectedMetadata = {
    title: 'title',
    description: 'title',
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
      siteName: 'title',
      images: '/icons/favicon.ico',
    },
    manifest: '/manifest.json',
    appleWebApp: {
      capable: true,
      title: 'title',
      statusBarStyle: 'black-translucent',
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('returns expected metadata with undefined values', async () => {
    spyEnvs.mockReturnValue({
      NODE_ENV: 'production',
      BUNDLE_ANALYZER: false,
      NEXT_PUBLIC_BASE_URL: '',
    });

    const expected = {
      ...expectedMetadata,
      metadataBase: undefined,
    };

    const metadata = await generateMetadata({ params: { locale: 'en' } });
    expect(metadata).toEqual(expected);
  });

  test('returns expected metadata values', async () => {
    spyEnvs.mockReturnValue({
      NODE_ENV: 'production',
      BUNDLE_ANALYZER: false,
      NEXT_PUBLIC_BASE_URL: 'https://localhost:3000',
    });

    const expected = {
      ...expectedMetadata,
      metadataBase: new URL('https://localhost:3000'),
    };

    const metadata = await generateMetadata({ params: { locale: 'en' } });
    expect(metadata).toEqual(expected);
  });
});

describe('generateStaticParams', () => {
  test('returns an array of objects with locale property', () => {
    const result = generateStaticParams();
    expect(result).toHaveLength(2);

    result.forEach((param) => {
      expect(param).toHaveProperty('locale');
      expect(['en', 'nl']).toContain(param.locale);
    });
  });
});
