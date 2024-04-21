import {
  errorHandlerApiRoute,
  errorHandlerApi,
  errorHandlerApp,
  errorHandlerUi,
} from './error-handlers';

describe('error Handlers', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    // Spy on console.error to capture logs
    consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore console.error to its original implementation after each test
    consoleSpy.mockRestore();
  });

  test('errorHandlerApiRoute should log error message with prefix', () => {
    const error = 'API Route Error';
    errorHandlerApiRoute(error);
    expect(consoleSpy).toHaveBeenCalledWith('errorHandlerApiRoute', error);
  });

  test('errorHandlerApi should log error message with prefix', () => {
    const error = 'API Error';
    errorHandlerApi(error);
    expect(consoleSpy).toHaveBeenCalledWith('errorHandlerApi', error);
  });

  test('errorHandlerApp should log error message with prefix', () => {
    const error = 'App Error';
    errorHandlerApp(error);
    expect(consoleSpy).toHaveBeenCalledWith('errorHandlerApp', error);
  });

  test('errorHandlerUi should log error message with prefix', () => {
    const error = 'UI Error';
    errorHandlerUi(error);
    expect(consoleSpy).toHaveBeenCalledWith('errorHandlerUi', error);
  });
});
