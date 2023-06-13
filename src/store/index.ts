import { createStore, combineReducers } from 'redux'
import setUserPositionReducer from './reducers/setUserPositionReducer'
import setModalStatusReducer from './reducers/setModalStatusReducer'

const reducers = combineReducers({
  setUserPositionReducer,
  setModalStatusReducer,
})

const store = createStore(reducers)

export default store

export type RootState = ReturnType<typeof store.getState>
