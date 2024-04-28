const rootDirAbsolutePath = process.cwd();

function getRelativeFiles(files) {
  return files.map((file) => file.replace(rootDirAbsolutePath, '.'));
}

function getTurboAffectedFilters(files) {
  const affected = new Set();

  files.forEach((file) => {
    const [, , segment] = file.split('/');

    affected.add(`@repo/${segment}`);
  });

  const affectedKeys = Array.from(affected.keys());
  const affectedFilters = affectedKeys.map((key) => `--filter=${key}`);

  return affectedFilters;
}

module.exports = {
  '*.{ts,tsx,js,json,html,css,scss,less,sass,svg}': (files) => {
    const affectedFilters = getTurboAffectedFilters(files);

    return [`npm run lint ${affectedFilters.join(' ')}`];
  },
  '**/*.{t,j}s?(x)': (files) => {
    const affectedFilters = getTurboAffectedFilters(files);

    return ['npm run type-check', `npm run test ${affectedFilters.join(' ')}`];
  },
};
