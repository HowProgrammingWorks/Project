'use strict';

const metatests = require('metatests');
const lib = require('..');

metatests.test('API exported count', test => {
  test.strictSame(Object.keys(lib).length, 7);
  test.end();
});

metatests.test('API exported types', test => {
  for (const key in lib) {
    const fn = lib[key];
    test.strictSame(typeof fn, 'function');
  }
  test.end();
});
