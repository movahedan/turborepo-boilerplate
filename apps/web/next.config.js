/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
};

const enableBundleAnalyzer =
  process.env.BUNDLE_ANALYZER === "true" &&
  process.env.NODE_ENV === "production";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: enableBundleAnalyzer,
  analyzerMode: "json",
});

module.exports = enableBundleAnalyzer
  ? withBundleAnalyzer(nextConfig)
  : nextConfig;
