import { Config } from 'jest';
import { jestConfigBase } from './jest.config.base';

export const jestConfigNode: Config = {
  ...jestConfigBase,
};
