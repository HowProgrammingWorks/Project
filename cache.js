'use strict';

const lib1 = require('./main.js');
const libPath = require.resolve('./main.js');
console.dir({ libPath });
delete require.cache[libPath];
const lib2 = require('./main.js');

if (lib1 === lib2) {
  console.log('Cache not reloaded');
} else {
  console.log('Cache reloaded');
}
