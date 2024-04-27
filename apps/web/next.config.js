const { paraglide } = require('@inlang/paraglide-next/plugin');
const createBundleAnalyzer = require('@next/bundle-analyzer');

const isBundleAnalyzerEnabled =
  process.env.BUNDLE_ANALYZER === 'true' &&
  process.env.NODE_ENV === 'production';

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: isBundleAnalyzerEnabled,
  analyzerMode: 'json',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './dist/build/.next',
  swcMinify: true,
  reactStrictMode: true,
};

let composedConfigs = nextConfig;
if (isBundleAnalyzerEnabled) {
  composedConfigs = withBundleAnalyzer(nextConfig);
}

module.exports = paraglide({
  paraglide: {
    project: './project.inlang',
    outdir: './src/translations',
  },
  ...composedConfigs,
});
