var test = require('tape');
var exampleMath = require('../src/scripts/example-math.js');

test('exampleMath.add example test', function(t) {
	t.plan(3);
	var fivePlus = exampleMath.adder(5);
	t.equal(fivePlus(5), 10);
	t.equal(fivePlus(10), 15);
	t.equal(fivePlus(15), 20);
	t.end();
});