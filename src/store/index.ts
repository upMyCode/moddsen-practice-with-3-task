import { createStore, combineReducers } from 'redux'
import setUserPositionReducer from './reducers/setUserPositionReducer'
import setModalStatusReducer from './reducers/setModalStatusReducer'
import setCurrentUserInfoReducer from './reducers/setCurrentUserInfoReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducers = combineReducers({
  setUserPositionReducer,
  setModalStatusReducer,
  setCurrentUserInfoReducer,
})

const store = createStore(reducers, composeWithDevTools())

export default store

export type RootState = ReturnType<typeof store.getState>
