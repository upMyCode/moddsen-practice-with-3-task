import TypeCoords from './TypeCoords'
import TypeActionSetUserPosition from './TypeActionSetUserPosition'

const initialState: TypeCoords = {
  coords: [53.9018, 27.55919],
  zoom: 9,
}

const setUserPositionReducer = (
  state = initialState,
  action: TypeActionSetUserPosition
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
