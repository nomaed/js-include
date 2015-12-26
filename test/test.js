var util = require('util');
var jsInclude = require('../index');

console.log('\nFirst file included:');
var nameSpace = jsInclude(['includeFile.js']);
console.log(util.inspect(nameSpace, {colors: true}));

console.log('\nInclude second file, use same nameSpace:');
jsInclude(['includeFile2.js'], nameSpace);
console.log(util.inspect(nameSpace, {colors: true}));

console.log('\nInclude another file that has a syntax error:');
try {
    console.log(jsInclude(['syntaxError.js']));
}
catch(e) {
    console.error(e.message);
}