export function parseCookies(cookieString: string | undefined, key: string) {
  const cookies: Record<string, string> = {};
  if (!cookieString) {
    return undefined;
  }

  const cookiePairs = cookieString.trim().split('; ');
  cookiePairs.forEach((cookie) => {
    const [k, value] = cookie.trim().split('=');
    cookies[k.trim()] = value.trim();
  });

  return cookies[key];
}

export const cookieNames = {
  NEXT_LOCALE: 'NEXT_LOCALE',
  NEXT_PUBLIC_AUTH_COOKIE: 'NEXT_PUBLIC_AUTH_COOKIE',
};
