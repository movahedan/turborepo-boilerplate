import { Config } from 'jest';
import { jestConfigBase } from './jest.config.base';

export const jestConfigJsdom: Config = {
  ...jestConfigBase,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
