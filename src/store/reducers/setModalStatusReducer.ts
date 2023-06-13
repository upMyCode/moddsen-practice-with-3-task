import IStatus from './IStatus'
import TSetModalStatusAction from './TSetModalStatusAction'

const initialState: IStatus = {
  status: false,
}

const setModalStatusReducer = (
  state = initialState,
  action: TSetModalStatusAction
) => {
  switch (action.type) {
    case 'SET_MODAL_STATUS':
      return {
        status: action.payload,
      }
    default:
      return state
  }
}

export default setModalStatusReducer
