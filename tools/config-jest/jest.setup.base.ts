const oldEnv = process.env;

beforeEach(() => {
  process.env = { ...oldEnv };
  jest.clearAllMocks();
  jest.resetModules();
})