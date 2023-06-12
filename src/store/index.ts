import { createStore, combineReducers } from 'redux'
import setUserPositionReducer from './reducers/setUserPositionReducer'

const reducers = combineReducers({
  setUserPositionReducer,
})

const store = createStore(reducers)

export default store

export type RootState = ReturnType<typeof store.getState>
