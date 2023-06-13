import ILocationData from './ILocationData'

const setUserPositionAction = (location: ILocationData) => ({
  payload: location,
  type: 'SET_USER_POSITION',
})

export default setUserPositionAction
