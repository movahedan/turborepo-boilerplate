import { jestConfigJsdom } from '@repo/config-jest/jest.config.jsdom';

import type { Config } from 'jest';

const jestConfig: Config = {
  ...jestConfigJsdom,
  collectCoverageFrom: [
    ...(jestConfigJsdom.collectCoverageFrom ?? []),
    '!src/**/*.stories.tsx',
  ],
};

export default jestConfig;
