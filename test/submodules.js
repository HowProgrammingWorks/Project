'use strict';

const metatests = require('metatests');
const lib = require('..');

metatests.test('submodules', test => {
  test.strictSame(lib.method11(), 11);
  test.strictSame(lib.method12(), 12);
  test.strictSame(lib.method21(), 21);
  test.strictSame(lib.method22(), 22);
  test.strictSame(lib.method23(), 23);
  test.strictSame(lib.method31(), 31);
  test.strictSame(lib.method32(), 32);
  test.end();
});
