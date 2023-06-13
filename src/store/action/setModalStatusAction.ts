import TStatus from './TStatus'

const setModalStatusAction = (status: TStatus) => ({
  type: 'SET_MODAL_STATUS',
  payload: status,
})

export default setModalStatusAction