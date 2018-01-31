//Third Party
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

//Reducers
import CombinedReducers from './reducers'

//Sagas
import { FetchTODOSaga } from './sagas/FetchTODOSaga'

//Create instance of saga middleware
const sagaMiddleware = createSagaMiddleware();

//Create Store
const store = createStore(
    CombinedReducers,
    applyMiddleware(sagaMiddleware)
);

//Apply sagas to store
sagaMiddleware.run(FetchTODOSaga);

export default store
