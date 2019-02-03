import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import user from './reducers/user'
import profession from './reducers/profession'

const middlwares = applyMiddleware(thunk)
const reduxDevtools = (<any>window).__REDUX_DEVTOOLS_EXTENSION__ && (<any>window).__REDUX_DEVTOOLS_EXTENSION__();

const enhancers = compose(middlwares, reduxDevtools)

const reducers = combineReducers({ user, profession })

export default createStore(reducers, undefined, enhancers)