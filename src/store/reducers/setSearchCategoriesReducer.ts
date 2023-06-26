import type { SetSearchCategoriesAction } from './types';

const initialState = {
  category: 'all',
};

const setSearchCategoriesReducer = (
  state = initialState,
  action: SetSearchCategoriesAction,
) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return {
        category: action.payload,
      };
    default:
      return state;
  }
};

export default setSearchCategoriesReducer;
