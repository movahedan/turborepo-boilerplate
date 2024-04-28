import { defineConfig } from 'tsup';

const tsupConfig = defineConfig(() => ({
  tsconfig: 'tsconfig.prod.json',
  entry: ['src/index.ts'],
  format: ['esm'],
  outDir: 'dist/build',
  external: ['react', 'react-dom', 'tailwind-merge'],
  env: {
    NODE_ENV: 'production',
  },
  minify: true,
  clean: true,
  dts: true,
  splitting: true,
  treeshake: true,
}));

export default tsupConfig;
