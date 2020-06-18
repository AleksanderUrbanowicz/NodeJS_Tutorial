var stringToExport = 'exported string';
function log(message, logLevel)
{
    console.log(logLevel+': '+message);
}

function sayHello(name)
{
    console.log('hello ' +name);
}

module.exports.log=log;
module.exports.greet=sayHello;
module.exports.someString=stringToExport;

// console.log('logger.js module: ');
// console.log(module);