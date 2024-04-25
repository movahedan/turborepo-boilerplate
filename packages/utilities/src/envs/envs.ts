export function envs() {
  return {
    NODE_ENV: process.env.NODE_ENV || 'development',
    BUNDLE_ANALYZER: Boolean(process.env.BUNDLE_ANALYZER) || false,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || '',
  };
}
