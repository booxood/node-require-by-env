var path = require('path');

var _ = require('lodash');

function Loader(options) {
  var opt = options || {};
  var base = opt.base || process.env.PWD || '.';
  var filename = opt.filename || '';
  var env = opt.env || 'NODE_ENV';
  var merge = _.isUndefined(opt.merge) ? true : opt.merge;
  var defaultFilename = opt.defaultFilename || 'default';

  var loadFilename = '';
  var envObj = {};
  var defaultObj = {};

  base = path.resolve(base);

  loadFilename = process.env[env];
  if (filename) {
    loadFilename = filename.replace(/ENV/, loadFilename);
    defaultFilename = filename.replace(/ENV/, defaultFilename);
  }

  envObj = require(path.join(base, loadFilename));
  if (!merge) {
    return envObj;
  }

  defaultObj = require(path.join(base, defaultFilename));
  return _.merge(defaultObj, envObj);
}

module.exports = Loader;
