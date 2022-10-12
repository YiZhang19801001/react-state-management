import { createStore, applyMiddleware, Store } from 'redux';
import reducer, { stateType, actionType } from './reducer';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
