import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import user from './reducers/user'
import profession from './reducers/profession'
import fruits from './reducers/fruits'

const middlwares = applyMiddleware(thunk)
const reduxDevtools = (<any>window).__REDUX_DEVTOOLS_EXTENSION__ && (<any>window).__REDUX_DEVTOOLS_EXTENSION__();

const enhancers = compose(middlwares, reduxDevtools)

const reducers = combineReducers({ user, profession, fruits })

export default createStore(reducers, undefined, enhancers)