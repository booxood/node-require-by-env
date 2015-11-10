/* eslint-disable no-unused-vars */
var should = require('should');
/* eslint-enable no-unused-vars */

var loader = require('../index.js');

var defaultJSON = require('./test_config/default.json');
var testJSON = require('./test_config/test.json');
var mergedJSON = require('./test_config/merged.json');

/* eslint-disable func-names */
describe('Merge', function() {
  it('Deep merge', function() {
    var config = loader({base: './test/test_config'});
    config.should.eql(mergedJSON);
  });
});

describe('Options', function() {
  it('Set options `defaultFilename`', function() {
    var config = loader({
      base: './test/test_config',
      defaultFilename: 'index',
    });
    config.should.eql(mergedJSON);
  });

  it('Set options `merge`', function() {
    var config = loader({
      base: './test/test_config',
      merge: false,
    });
    config.should.eql(testJSON);
  });

  it('Set option `filename`', function() {
    var config = loader({
      base: './test/test_config',
      filename: 'config.ENV',
    });
    config.should.eql(mergedJSON);
  });

  process.env.PWD = './test/test_config';
  it('No option', function() {
    var config = loader();
    config.should.eql(defaultJSON);
  });
});
