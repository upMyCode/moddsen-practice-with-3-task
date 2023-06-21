import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import setCurrentUserInfoReducer from './reducers/setCurrentUserInfoReducer';
import setModalStatusReducer from './reducers/setModalStatusReducer';
import setUserPositionReducer from './reducers/setUserPositionReducer';

const reducers = combineReducers({
  setUserPositionReducer,
  setModalStatusReducer,
  setCurrentUserInfoReducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;

export type TypeRootState = ReturnType<typeof store.getState>;
