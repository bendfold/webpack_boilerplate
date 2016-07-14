require('../styles/index.styl') // The page is now styled

let foo = a => {
		return b => {return a + b};
	};


let c = foo(5);

console.log('c(5) => ', c(5) );
console.log('c(10) => ', c(10) );
console.log('c(20) => ', c(20) );
