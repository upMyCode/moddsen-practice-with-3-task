import type { SetCurrentUserInfoAction } from './types';

const initialState = null;
const setCurrentUserInfoReducer = (
  state: null = initialState,
  action: SetCurrentUserInfoAction,
) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default setCurrentUserInfoReducer;
