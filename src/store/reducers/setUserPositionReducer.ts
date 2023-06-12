import { LatLngTuple } from 'leaflet'
import setUserPositionAction from '../action/setUserPositionAction'

type TCoords = {
  coords: LatLngTuple
  zoom: number
}
const initialState: TCoords = {
  coords: [53.9018, 27.55919],
  zoom: 9,
}

type Action = ReturnType<typeof setUserPositionAction>

const setUserPositionReducer = (state = initialState, action: Action) => {
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
