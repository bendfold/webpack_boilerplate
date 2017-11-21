// Framework
import React from 'react';
import { Provider } from 'react-redux';
// State management
import { createStore } from 'redux';
import configureStore from './store/configureStore';
// Store
const store = configureStore();
// Components
import CounterContainer from './components/counter/CounterContainer';

const App = () => (
	<Provider store={store}>
		<CounterContainer />
	</Provider>
);

export default App;
