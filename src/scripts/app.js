// Framework
import React from 'react';
import { Provider, connect } from 'react-redux';
// State management
import { createStore } from 'redux';
import configureStore from './store/configureStore';
// Store
const store = configureStore();
// Actions
import { incrementCounter, decrementCounter } from './actions/index';

// START COMPONENTS
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

const mapStateToCounterProps = (
	state
) => {
	return {
		counter: state.counter
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

// END COMPONENTS

const App = () => (
	<Provider store={store}>
		<CounterContainer />
	</Provider>
);

export default App;
