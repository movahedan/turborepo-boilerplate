import { envs } from './envs';

describe('envs', () => {
  test('should return an object with NODE_ENV and BUNDLE_ANALYZER', () => {
    // Mock process.env variables for testing
    process.env.NODE_ENV = 'development';
    process.env.BUNDLE_ANALYZER = 'true';

    const result = envs();

    // Ensure that the returned object has NODE_ENV and BUNDLE_ANALYZER properties
    expect(result).toHaveProperty('NODE_ENV', 'development');
    expect(result).toHaveProperty('BUNDLE_ANALYZER', true);

    // Clearing process.env after the test
    delete process.env.NODE_ENV;
    delete process.env.BUNDLE_ANALYZER;
  });

  test('should default BUNDLE_ANALYZER to "false" when not set', () => {
    // Mock process.env.NODE_ENV variable for testing
    process.env.NODE_ENV = 'production';

    const result = envs();

    // Ensure that the returned object has NODE_ENV and BUNDLE_ANALYZER properties
    expect(result).toHaveProperty('NODE_ENV', 'production');
    expect(result).toHaveProperty('BUNDLE_ANALYZER', false);

    // Clearing process.env after the test
    delete process.env.NODE_ENV;
  });
});
