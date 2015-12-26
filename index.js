var fs = require('fs');
var vm = require('vm');

module.exports = jsInclude;

/**
 * Read a Javascript file, execute it in an isolated nameSpace and return it, to be used as namespace.
 * @param {string[]|string} files
 * @param {{}=} namespace
 * @returns {*}
 */
function jsInclude(files, namespace) {
    if (typeof namespace === 'undefined') {
        namespace = {};
    }

    if (typeof files === 'string') {
        files = [files];
    }
    else if (!Array.isArray(files)) {
        throw new TypeError();
    }

    files.forEach(function(filename) {
        var content = fs.readFileSync(filename);
        var script = new vm.Script(content);
        script.runInNewContext(namespace);
    });

    return namespace;
}
