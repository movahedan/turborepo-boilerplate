import { envs } from './envs';

describe('envs', () => {
  test('should return an object with NODE_ENV and BUNDLE_ANALYZER', () => {
    process.env.BUNDLE_ANALYZER = 'true';

    const result = envs();

    expect(result).toHaveProperty('NODE_ENV', 'test');
    expect(result).toHaveProperty('BUNDLE_ANALYZER', true);
  });

  test('should set default BUNDLE_ANALYZER to "false" when not set', () => {
    process.env.NODE_ENV = 'production';

    const result = envs();

    expect(result).toHaveProperty('NODE_ENV', 'production');
    expect(result).toHaveProperty('BUNDLE_ANALYZER', false);
  });

  test('should set default NODE_ENV to development', () => {
    process.env.NODE_ENV = '';

    const result = envs();

    expect(result).toHaveProperty('NODE_ENV', 'development');
  });
});
