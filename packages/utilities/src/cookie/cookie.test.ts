import { parseCookies } from './cookie';

describe('parseCookies', () => {
  test('should return undefined when cookieString is undefined', () => {
    const cookieString: string | undefined = undefined;
    const key = 'testKey';
    const result = parseCookies(cookieString, key);
    expect(result).toBeUndefined();
  });

  test('should return undefined when cookieString does not contain the key', () => {
    const cookieString = 'NEXT_LOCALE=en; NEXT_PUBLIC_AUTH_COOKIE=auth123';
    const key = 'nonExistingKey';
    const result = parseCookies(cookieString, key);
    expect(result).toBeUndefined();
  });

  test('should return the value corresponding to the key from the cookieString', () => {
    const cookieString = 'NEXT_LOCALE=en; NEXT_PUBLIC_AUTH_COOKIE=auth123';
    const key = 'NEXT_PUBLIC_AUTH_COOKIE';
    const result = parseCookies(cookieString, key);
    expect(result).toBe('auth123');
  });

  test('should handle cookies with additional whitespace', () => {
    const cookieString = '  NEXT_LOCALE=en;  NEXT_PUBLIC_AUTH_COOKIE=auth123 ';
    const key = 'NEXT_PUBLIC_AUTH_COOKIE';
    const result = parseCookies(cookieString, key);
    expect(result).toBe('auth123');
  });

  test('should handle cookies with additional whitespace around the key and value', () => {
    const cookieString = 'NEXT_LOCALE =en; NEXT_PUBLIC_AUTH_COOKIE = auth123';
    const key = 'NEXT_PUBLIC_AUTH_COOKIE';
    const result = parseCookies(cookieString, key);
    expect(result).toBe('auth123');
  });

  test('should handle cookies with additional whitespace around the equals sign', () => {
    const cookieString = 'NEXT_LOCALE= en; NEXT_PUBLIC_AUTH_COOKIE =auth123';
    const key = 'NEXT_LOCALE';
    const result = parseCookies(cookieString, key);
    expect(result).toBe('en');
  });
});
