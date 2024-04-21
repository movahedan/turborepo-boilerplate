import { Config } from 'jest';
import path from "path";

const p = path.relative(process.cwd(), "./");
console.log(p);

export const jestConfigBase: Config = {
  roots: ['<rootDir>/'],
  modulePaths: ['<rootDir>/'],
  moduleDirectories: ['node_modules'],
  coverageDirectory: "<rootDir>/dist/test/coverage",
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  preset: 'ts-jest', // or other ESM presets
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.[tj]s?(x)?$': [
      'ts-jest',
      {
        useESM: true,
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
