const rootDirAbsolutePath = process.cwd();

function getRelativeFiles(files) {
  return files.map((file) => file.replace(rootDirAbsolutePath, '.'));
}

function getTurboAffectedFilters(files) {
  const affected = new Set();

  files.forEach((file) => {
    const [, category, segment] = file.split('/');

    if(segment && ['apps', 'packages'].includes(category)) {
      affected.add(`@repo/${segment}`);
    }
  });

  const affectedKeys = Array.from(affected.keys());
  const affectedFilters = affectedKeys.map((key) => `--filter=${key}`);

  return affectedFilters;
}

module.exports = {
  '*.{ts,tsx,js,json,html,css,scss,less,sass,svg}': (files) => {
    const affectedFilters = getTurboAffectedFilters(files);

    if(!affectedFilters.length) {
      return [];
    }

    return [`yarn lint ${affectedFilters.join(' ')}`];
  },
  '**/*.{t,j}s?(x)': (files) => {
    const affectedFilters = getTurboAffectedFilters(files);

    if(!affectedFilters.length) {
      return [];
    }

    return ['yarn type-check', `yarn test ${affectedFilters.join(' ')}`];
  },
};
