require('../styles/index.styl'); // The page is now styled

var exampleAdder = require('./example-adder.js');

let c = exampleAdder(5);
console.log('c(5) => ', c(5) );
console.log('c(10) => ', c(10) );
console.log('c(20) => ', c(20) );
