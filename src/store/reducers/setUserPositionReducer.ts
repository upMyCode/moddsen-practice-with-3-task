import TCoords from './TCoords'
import TActionSetUserPosition from './TActionSetUserPosition'

const initialState: TCoords = {
  coords: [53.9018, 27.55919],
  zoom: 9,
}

const setUserPositionReducer = (
  state = initialState,
  action: TActionSetUserPosition
) => {
  switch (action.type) {
    case 'SET_USER_POSITION':
      return {
        ...action.payload,
      }

    default:
      return state
  }
}

export default setUserPositionReducer
