'use strict';

const tap = require('tap');
const lib = require('..');

tap.test('API exported count', (test) => {
  test.strictSame(Object.keys(lib).length, 7);
  test.end();
});

tap.test('API exported types', (test) => {
  for (const key in lib) {
    const fn = lib[key];
    test.strictSame(typeof(fn), 'function');
  }
  test.end();
});

