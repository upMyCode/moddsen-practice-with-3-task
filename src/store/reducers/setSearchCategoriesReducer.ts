import type TypeCategories from './TypeSetSearchCategoriesAction';

const initialState = {
  category: 'all',
};

const setSearchCategoriesReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action: TypeCategories,
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
