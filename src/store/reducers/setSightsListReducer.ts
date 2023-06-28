import type { Features } from '../../components/LocationMarkers/types';
import type { SetSightsListAction } from './types';

interface Sights {
  sights: Array<Features>;
}
const initialState: Sights = {
  sights: [],
};

const setSightsListReducer = (
  state = initialState,
  action: SetSightsListAction,
) => {
  switch (action.type) {
    case 'SET_SIGHTS':
      return {
        sights: action.payload,
      };

    default:
      return state;
  }
};

export default setSightsListReducer;
