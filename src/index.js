/* exported css */
import './styles/app.styl';
// Framework
import React from 'react';
import ReactDOM from 'react-dom';
// State management
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

// START ACTIONS
const incrementCounter = () => {
	return {
		type: 'INCREMENT_COUNTER'
	}
};
const decrementCounter = () => {
	return {
		type: 'DECREMENT_COUNTER'
	}
};
// END ACTIONS

// START REDUCERS
const counterVal = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT_COUNTER':
			return state += 1;
		case 'DECREMENT_COUNTER':
			return (state > 0) ? state -= 1 : state;
		default:
			return state;
	}
}

const counterApp = combineReducers({
	counterVal
});
// END REDUCERS

// COMPONENTS
const Counter = ({
	counterVal,
	onUpClick,
	onDownClick
}) => (
	<div className="counter-container">
		<h2>Redux driven counter example</h2>
		<p>Clicked Count Value: {counterVal}</p>
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

const mapStateToCounterProps = (
	state
) => {
	return {
		counterVal: state.counterVal
	};
};

const mapDispatchToCounterProps = (
	dispatch
) => {
	return {
		onUpClick: () => {
			dispatch(incrementCounter());
		},
		onDownClick: () => {
			dispatch(decrementCounter());
		}
	}
};

const CounterContainer = connect(
	mapStateToCounterProps,
	mapDispatchToCounterProps
)(Counter);

// COMPONENTS

const CounterApp = () => (
	<div>
		<CounterContainer />
	</div>
);

ReactDOM.render(
	<Provider store={createStore(counterApp)}>
		<CounterApp />
	</Provider>,
	document.getElementById('appRoot')
);


