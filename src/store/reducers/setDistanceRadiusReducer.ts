import type TypeSetDistanceRadiusAction from './TypeSetDistanceRadiusAction';

const initialState = {
  radius: '0',
};

const setDistanceRadiusReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action: TypeSetDistanceRadiusAction,
) => {
  switch (action.type) {
    case 'SET_RADIUS':
      return {
        radius: action.payload,
      };
    default:
      return state;
  }
};

export default setDistanceRadiusReducer;
