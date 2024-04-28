import { Config } from 'jest';

export const jestConfigBase: Config = {
  preset: 'ts-jest', // or other ESM presets
  roots: ['<rootDir>/'],
  modulePaths: ['<rootDir>/'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  },
  coverageDirectory: "<rootDir>/dist/test/coverage",
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/index.ts'],
  setupFilesAfterEnv: ["@repo/config-jest/jest.setup.base.ts"],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.[tj]s?(x)?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: '<rootDir>/tsconfig.test.json'
      },
    ],
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
