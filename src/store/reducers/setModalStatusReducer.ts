import TypeStatus from './TypeStatus'
import TypeSetModalStatusAction from './TypeSetModalStatusAction'

const initialState: TypeStatus = {
  status: false,
  modalName: '',
}

const setModalStatusReducer = (
  state = initialState,
  action: TypeSetModalStatusAction
) => {
  switch (action.type) {
    case 'SET_MODAL_STATUS':
      return {
        ...action.payload,
      }
    default:
      return state
  }
}

export default setModalStatusReducer
