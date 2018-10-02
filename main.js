'use strict';

const lib = {};
['submodule1', 'submodule2', 'submodule3'].forEach(name => {
  const sub = require(`./lib/${name}.js`);
  Object.assign(lib, sub);
});

console.log('We combined submodules:');
console.log(Object.keys(lib).join(', '));

module.exports = lib;
