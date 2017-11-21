// Framework
import React from 'react';

const Counter = ({
	counter,
	onUpClick,
	onDownClick
}) => (
	<div className="counter-container">
		<h2>Redux driven counter example</h2>
		<p>Clicked Count Value: {counter}</p>
		<ul>
			<li>
				<button onClick={() => onUpClick()}>
					Up
				</button>
			</li>
			<li>
				<button onClick={() => onDownClick()}>
					Down
				</button>
			</li>
		</ul>
	</div>
);

export default Counter;