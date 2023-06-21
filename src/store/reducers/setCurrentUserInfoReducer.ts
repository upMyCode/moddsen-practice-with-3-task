import type TypeSetCurrentUserInfoAction from './TypeSetCurrentUserInfoAction';

const initialState = null;
const setCurrentUserInfoReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: null = initialState,
  action: TypeSetCurrentUserInfoAction,
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
