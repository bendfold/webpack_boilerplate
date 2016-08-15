require('../styles/index.styl');

var exampleAdder = require('./example-adder.js');

console.log('exampleAdder ', exampleAdder);

let test = exampleAdder.exampleAdder(5);
console.log('test(5) => ', test(5) );
console.log('test(10) => ', test(10) );
console.log('test(20) => ', test(20) );
