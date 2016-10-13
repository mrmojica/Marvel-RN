// var redux = require('redux');
// var createStore = redux.createStore;
// var applyMiddleware = redux.applyMiddleware;
// var thunk = require('redux-thunk').default;
// var reducers = require('./reducers/reducers');


// var store = createStore(reducers, applyMiddleware(thunk));

// module.exports  = store;

import { applyMiddleware, createStore } from 'redux';
//alternate alternate redux-promise-middleware  (invoke the variable in applyMiddleware)
import ReduxPromise from 'redux-promise';
// import thunk from 'redux-thunk';
import thunk from 'redux-thunk';
import reducers from './reducers/index';


const store = createStore(reducers, applyMiddleware(ReduxPromise, thunk));

export default store;

