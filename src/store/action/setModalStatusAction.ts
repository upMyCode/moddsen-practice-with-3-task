import type TypeStatus from './TypeStatus';

const setModalStatusAction = (status: TypeStatus) => ({
  type: 'SET_MODAL_STATUS',
  payload: status,
});

export default setModalStatusAction;
