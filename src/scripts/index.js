require('../styles/index.styl');

var exampleMath = require('./example-math.js');

let fivePlus = exampleMath.adder(5);
console.log('fivePlus(5) => ', fivePlus(5) );
console.log('fivePlus(10) => ', fivePlus(15) );
console.log('fivePlus(20) => ', fivePlus(20) );
