var fs = require('fs');
var vm = require('vm');
var acorn = require('acorn');

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

    files.forEach(function (filename) {
        var content = fs.readFileSync(filename);
        try {
            acorn.parse(content);
        } catch (e) {
            throw new EvalError(formatError(e, filename));
        }
        var script = new vm.Script(content);
        script.runInNewContext(namespace);
    });

    return namespace;
}

/**
 * @param {SyntaxError} exception
 * @param {string} filename
 * @returns {string}
 */
function formatError(exception, filename) {
    return filename
        + '(' + exception.loc.line + ':' + exception.loc.column + ') '
        + exception.message.replace(/\s?\(\d+:\d+\)$/, '');
}

