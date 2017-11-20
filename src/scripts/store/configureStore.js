// State management
import { createStore } from 'redux';
// Reducers
import rootReducer from '../reducers/index';

const configureStore = () => createStore(rootReducer);

export default configureStore;
