import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import setCurrentUserInfoReducer from './reducers/setCurrentUserInfoReducer';
import setDistanceRadiusReducer from './reducers/setDistanceRadiusReducer';
import setModalStatusReducer from './reducers/setModalStatusReducer';
import setSearchCategoriesReducer from './reducers/setSearchCategoriesReducer';
import setSightsListReducer from './reducers/setSightsListReducer';
import setUserPositionReducer from './reducers/setUserPositionReducer';

const reducers = combineReducers({
  setUserPositionReducer,
  setModalStatusReducer,
  setCurrentUserInfoReducer,
  setDistanceRadiusReducer,
  setSearchCategoriesReducer,
  setSightsListReducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;

export type TypeRootState = ReturnType<typeof store.getState>;
