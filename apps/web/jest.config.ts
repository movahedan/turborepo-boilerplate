import { jestConfigJsdom } from '@repo/config-jest/jest.config.jsdom';
import nextJest from 'next/jest.js';

import type { Config } from 'jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  ...jestConfigJsdom,
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  collectCoverageFrom: ['app/**/*.{ts,tsx}', '!**/*.stories.tsx'],
};

const jestConfig = createJestConfig(config);

module.exports = jestConfig;
