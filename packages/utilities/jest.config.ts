import { jestConfigBase } from '@repo/config-jest/jest.config.base';

import type { Config } from 'jest';

const jestConfig: Config = {
  ...jestConfigBase,
};

export default jestConfig;
