import type TypeActionSetUserPosition from './TypeActionSetUserPosition';
import type TypeCoords from './TypeCoords';

const initialState: TypeCoords = {
  coords: [53.9018, 27.55919],
  zoom: 9,
};

const setUserPositionReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action: TypeActionSetUserPosition,
) => {
  switch (action.type) {
    case 'SET_USER_POSITION':
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export default setUserPositionReducer;
