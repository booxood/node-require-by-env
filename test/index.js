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

describe('String argv', function() {
  it('Set base is string', function() {
    var config = loader('./test/test_config');
    config.should.eql(mergedJSON);
  });
});

describe('Options', function() {
  it('Set option `defaultVar`', function() {
    var config = loader({
      base: './test/test_config',
      defaultVar: 'index',
    });
    config.should.eql(mergedJSON);
  });

  it('Set option `filename`', function() {
    var config = loader({
      base: './test/test_config',
      filename: 'config.NODE_ENV',
    });
    config.should.eql(mergedJSON);
  });

  process.env.PWD = './test/test_config';
  it('No options will console error', function() {
    var config = loader();
    should(config).not.be.ok();
  });
});

describe('File path error', function() {
  it('Default file path error', function() {
    var config = loader({
      base: './test/test_config',
      defaultVar: 'error',
    });
    config.should.eql(testJSON);
  });

  it('Load file path error', function() {
    var config = loader({
      base: './test/test_config',
      envVar: 'ERROR',
    });
    config.should.eql(defaultJSON);
  });

  it('All file path error, return {}', function() {
    var config = loader({
      base: './test/test_config',
      defaultVar: 'error',
      envVar: 'ERROR',
    });
    config.should.eql({});
  });
});
