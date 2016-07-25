require('../styles/index.styl'); // The page is now styled

var exampleAdder = require('./example-adder.js');

let test = exampleAdder(5);
console.log('test(5) => ', test(5) );
console.log('test(10) => ', test(10) );
console.log('test(20) => ', test(20) );
