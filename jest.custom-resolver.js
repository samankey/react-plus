const { dirname, extname, join } = require('path');
const { accessSync } = require('fs');
const currentResolver = require('@nrwl/jest/plugins/resolver');
/**
 * NX의 jest resolver가 vanilla-extract의 css를 plain으로 처리하며 오류가 생성되는 것을 방지
 */
module.exports = function (path, options) {
  const ext = extname(path);
  if (ext === '.css') {
    try {
      accessSync(join(options.basedir, path) + '.ts');
      return options.defaultResolver(path, options);
    } catch (e) {
      return require.resolve('identity-obj-proxy');
    }
  } else {
    return currentResolver(path, options);
  }
};
