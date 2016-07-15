var test = require('tape');
var exampleMath = require('../src/scripts/example-adder.js');

test('exampleAdder example test', function(t) {
	t.plan(3);
	var fivePlus = exampleMath.exampleAdder(5);
	t.equal(fivePlus(5), 10);
	t.equal(fivePlus(10), 15);
	t.equal(fivePlus(15), 20);
	t.end();
});
