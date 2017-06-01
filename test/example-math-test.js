import test from 'tape';
import adder from '../src/scripts/example-math.js';

test('Adder example test', function(t) {
	t.plan(3);
	var fivePlus = adder(5);
	t.equal(fivePlus(5), 10);
	t.equal(fivePlus(10), 15);
	t.equal(fivePlus(15), 20);
	t.end();
});