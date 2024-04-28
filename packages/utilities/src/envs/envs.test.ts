import { envs } from './envs';

describe('envs', () => {
  test('should set default NODE_ENV', () => {
    const result = envs();

    expect(result).toHaveProperty('NODE_ENV', 'test');
  });

  test('should return the correct default serialized object', () => {
    process.env.NODE_ENV = undefined;
    process.env.BUNDLE_ANALYZER = undefined;
    process.env.NEXT_PUBLIC_BASE_URL = undefined;

    const result = envs();

    expect(result).toHaveProperty('NODE_ENV', 'development');
    expect(result).toHaveProperty('BUNDLE_ANALYZER', false);
    expect(result).toHaveProperty('NEXT_PUBLIC_BASE_URL', '');
  });

  test('should set correct serialized object', () => {
    process.env.NODE_ENV = 'production';
    process.env.BUNDLE_ANALYZER = 'false';
    process.env.NEXT_PUBLIC_BASE_URL = 'test.com';

    const result = envs();

    expect(result).toHaveProperty('NODE_ENV', 'production');
    expect(result).toHaveProperty('BUNDLE_ANALYZER', false);
    expect(result).toHaveProperty('NEXT_PUBLIC_BASE_URL', 'test.com');
  });
});
