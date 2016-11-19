import { applyMiddleware, createStore } from 'redux';

let thunk = require('redux-thunk').default;
import reducers from './reducers/index';

const store = createStore(reducers, applyMiddleware(thunk));

module.exports = store;

