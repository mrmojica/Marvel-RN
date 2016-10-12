// var redux = require('redux');
// var createStore = redux.createStore;
// var applyMiddleware = redux.applyMiddleware;
// var thunk = require('redux-thunk').default;
// var reducers = require('./reducers/reducers');


// var store = createStore(reducers, applyMiddleware(thunk));

// module.exports  = store;

import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
let thunk = require('redux-thunk').default;
import reducers from './reducers/index';

const store = createStore(reducers, applyMiddleware(thunk));

module.exports = store;

