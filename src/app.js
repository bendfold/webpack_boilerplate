/* exported css */
import './styles/app.styl';
import appInit from './scripts/app-init';

var foo = {
	a: 1,
	b: 2,
	c: 3
};

var bar = {
	...foo,
	x: 4
};

console.log('foo <<< ', foo);
console.log('bar >>> ', bar);

appInit();