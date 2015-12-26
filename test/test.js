var util = require('util');
var jsInclude = require('../index');

console.log('\nFirst file included:');
var nameSpace = jsInclude(['includeFile.js']);
console.log(util.inspect(nameSpace, {colors: true}));

console.log('\nInclude scond file, use same nameSpace:');
jsInclude(['includeFile2.js'], nameSpace);
console.log(util.inspect(nameSpace, {colors: true}));
