## Synopsis

Includes a JS file in Node.JS that isn't a node module and wraps its outcome in a namespace.

## Code Example

Return the script namespace to a new variable:

```js
var jsInclude = require('js-include');
var namespace = jsInclude('./includeFile.js');
namespace.innerFunction('hello world');
```

Use multiple script files in a single namespace:

```js
var jsInclude = require('js-include');
var namespace = jsInclude([
    './file1.js',
    './file2.js',
    '../../otherFile.js',
    'dir/file3.js'
]);
```

Provide an object to hold the namespace:

```js
var jsInclude = require('js-include');

var namespace = {};
jsInclude(['file1.js', 'file2.js'], namespace);

namespace.innerFunction('hello world');
```

## Motivation

Initially this was created to use Apache Thrift generated JS files in a small test environment, without generating
dedicated Node.JS files.

## Installation

`npm install js-include`

## API Reference

`require('js-include')` returns a function that can accept two arguments:

1st argument: string or string[]
List of files to execute.

2nd argument (optional): object
A simple object to be used as a namespace 

## License

The MIT License (MIT)
Copyright (c) 2015 Boris Aranovich <nomaed@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

