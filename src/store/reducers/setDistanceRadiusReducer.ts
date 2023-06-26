import type { SetDistanceRadiusAction } from './types';

const initialState = {
  radius: '10',
};

const setDistanceRadiusReducer = (
  state = initialState,
  action: SetDistanceRadiusAction,
) => {
  switch (action.type) {
    case 'SET_RADIUS':
      return {
        radius:
          Number(action.payload) < 10 ? initialState.radius : action.payload,
      };
    default:
      return state;
  }
};

export default setDistanceRadiusReducer;
