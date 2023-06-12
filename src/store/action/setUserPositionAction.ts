import { LatLngTuple } from 'leaflet'

interface ILocationData {
  coords: LatLngTuple
  zoom: number
}

const setUserPositionAction = (location: ILocationData) => ({
  payload: location,
  type: 'SET_USER_POSITION',
})

export default setUserPositionAction
