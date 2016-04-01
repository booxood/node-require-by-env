var path = require('path');

var _ = require('lodash');

function Loader(opt) {
  var base = typeof opt === 'string' ? opt : opt && opt.base;
  var filename = (opt && opt.filename) || 'NODE_ENV';
  var envVar = (opt && opt.envVar) || 'NODE_ENV';
  var defaultVar = (opt && opt.defaultVar) || 'default';
  var loadVar = process.env[envVar];

  var envObj = {};
  var defaultObj = {};

  var loadFilename = '';
  var defaultFilename = '';

  if (_.isUndefined(base)) {
    console.error('[require-by-env] must field "base"!');
    return;
  }

  base = path.resolve(base);
  loadFilename = path.join(base, filename.replace(/NODE_ENV/, loadVar));
  defaultFilename = path.join(base, filename.replace(/NODE_ENV/, defaultVar));

  if (loadVar) {
    try {
      envObj = require(loadFilename);
    } catch (err) {
      console.warn('[require-by-env] require load file :' + loadFilename + ', error:', err);
    }
  } else {
    console.warn('[require-by-env] no set NODE_ENV, only require default config');
  }

  try {
    defaultObj = require(defaultFilename);
  } catch (err) {
    console.warn('[require-by-env] require default file :' + defaultFilename + ', error:', err);
  }

  /* eslint consistent-return: 1 */
  return _.merge(defaultObj, envObj);
}

module.exports = Loader;
