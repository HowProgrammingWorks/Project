'use strict';

const lib = {};
['submodule1', 'submodule2', 'submodule3'].forEach(name => {
  const sub = require('./lib/' + name + '.js');
  Object.assign(lib, sub);
});

console.log('We combined submodules:');
console.log(Object.keys(lib).join(', '));

const metasync1 = require('metasync');
const metasyncPath = require.resolve('metasync');
delete require.cache[metasyncPath];
const metasync2 = require('metasync');
if (metasync1 === metasync2) {
  console.log('Cache not reloaded');
} else {
  console.log('Cache reloaded');
}

console.log('We use metasync:');
console.log(Object.keys(metasync1).join(', '));
