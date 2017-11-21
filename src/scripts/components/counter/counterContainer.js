// Framework
import React from 'react';
import { connect } from 'react-redux';
// Actions
import { incrementCounter, decrementCounter } from '../../actions/index';
// Components
import Counter from './counter';

const mapStateToProps = (
	state
) => {
	return {
		counter: state.counter
	};
};

const mapDispatchToProps = (
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
	mapStateToProps,
	mapDispatchToProps
)(Counter);


export default CounterContainer;