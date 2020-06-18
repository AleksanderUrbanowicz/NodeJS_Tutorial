
var logger = require('./logger');
console.log('logger object: '+logger);
// Main module, in node every file is module
// JSON object, id, path, exports, filename etc.
// console.log('App.js module: ');
// console.log(module);
// Scoped to that module

// var someName = logger.someString;
// logger.sayHello(someName);
// undefined
// logger.sayHello(global.someName);
// logger.log(someName, 'CRITICAL');

//Global window objects
global.console.log('');
//setTimeout();
//clearTimeout();

//setInterval();
//clearInterval();