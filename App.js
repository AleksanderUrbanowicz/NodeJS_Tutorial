
var logger = require('./logger');
console.log('logger object: '+logger);
// Main module, in node every file is module
// JSON object, id, path, exports, filename etc.
// console.log('App.js module: ');
// console.log(module);
// Scoped to that module
console.log(process.platform);
console.log(process.env.USER);
const { EventEmitter } = require ('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('log', () => 
{
    console.log('on log event')
})

eventEmitter.emit('log');

//IO
const{readFile, readFileSync} = require('fs');
let txt= readFile('testFile.txt','utf8', (err, txt)=>
{
    console.log('log after readFile done');
}
);
console.log('log outside readFile');

 txt= readFileSync('testFile.txt','utf8');
console.log(txt);

//promises
const{readFile} = require('fs').promises;
async function hello()
{

    const file = await readFile('./testFile.txt','utf8');
}
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