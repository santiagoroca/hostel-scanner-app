//Third Party
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

//Router
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

//Reducers
import { combineReducers } from 'redux'
import CombinedReducers from './reducers'

//Create instance of saga middleware
const sagaMiddleware = createSagaMiddleware();

//Create navigation createHistory
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

//Create Store
const store = createStore(
    combineReducers({
      ...CombinedReducers,
      router: routerMiddleware
    }),
    applyMiddleware(sagaMiddleware),
    applyMiddleware(middleware)
);

export { history, store }
