var helloWorld = (function () {
    return {
        array: ['Hello world!'],
        object: {helloWord: 'Hello world!'},
        func: function () {
            console.log('Hello wold!');
        }
    }
}());

var localVariable = 42;