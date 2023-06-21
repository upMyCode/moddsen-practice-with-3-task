import type TypeLocationData from './TypeLocationData';

const setUserPositionAction = (location: TypeLocationData) => ({
  payload: location,
  type: 'SET_USER_POSITION',
});

export default setUserPositionAction;
