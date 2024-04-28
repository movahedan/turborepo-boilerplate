const createBundleAnalyzer = require('@next/bundle-analyzer');
const createNextIntlPlugin = require('next-intl/plugin');

const isBundleAnalyzerEnabled =
  process.env.BUNDLE_ANALYZER === 'true' &&
  process.env.NODE_ENV === 'production';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');
const withBundleAnalyzer = createBundleAnalyzer({
  enabled: isBundleAnalyzerEnabled,
  analyzerMode: 'json',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './dist/build/.next',
  swcMinify: true,
  reactStrictMode: true,
  typescript: { tsconfigPath: './tsconfig.prod.json' },
};

const composedConfigs = withNextIntl(nextConfig);

module.exports = isBundleAnalyzerEnabled
  ? withBundleAnalyzer(composedConfigs)
  : composedConfigs;
