export function envs() {
  return {
    NODE_ENV: process.env.NODE_ENV ?? 'development',
    BUNDLE_ANALYZER: toBoolean(process.env.BUNDLE_ANALYZER),
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL ?? '',
  };
}

function toBoolean(value?: string) {
  if (value === 'false') return false;

  return Boolean(value);
}
