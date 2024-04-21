/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './dist/build/.next',
  swcMinify: true,
  reactStrictMode: true,
};

const isBundleAnalyzerEnabled =
  process.env.BUNDLE_ANALYZER === 'true' &&
  process.env.NODE_ENV === 'production';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: isBundleAnalyzerEnabled,
  analyzerMode: 'json',
});
const withNextIntl = require('next-intl/plugin')('./i18n.ts');

const nextConfigWithNextIntl = withNextIntl(nextConfig);

module.exports = isBundleAnalyzerEnabled
  ? withBundleAnalyzer(nextConfigWithNextIntl)
  : nextConfigWithNextIntl;
