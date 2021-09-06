/**
 * Test the reader module
 */
const assert = require('assert');
const path = require('path');

const logger = require('./silentlogger');
const Reader = require('../lib/reader');

describe('test reader module', function () {
  it('should return the given config', function (done) {
    const options = {
      config: 'example/apidoc.json',
    }
    const app = {
      options: options,
      log: logger
    };

    const content = require(path.resolve(app.options.config));

    const reader = new Reader(app);
    assert.strictEqual(reader.read(), content);
    done();
  });
});
