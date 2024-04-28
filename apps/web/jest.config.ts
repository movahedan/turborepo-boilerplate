import nextJest from 'next/jest';

import { jestConfigJsdom } from '@repo/config-jest/jest.config.jsdom';

import type { Config } from 'jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  ...jestConfigJsdom,
  setupFilesAfterEnv: [
    ...(jestConfigJsdom.setupFilesAfterEnv ?? []),
    './jest.setup.tsx',
  ],
  collectCoverageFrom: [
    ...(jestConfigJsdom.collectCoverageFrom ?? []),
    '!**/*.stories.tsx',
  ],
};

const jestConfig = createJestConfig(config);

module.exports = jestConfig;
