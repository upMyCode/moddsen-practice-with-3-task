import type { SetModalStatusAction, Status } from './types';

const initialState: Status = {
  status: false,
  modalName: '',
};

const setModalStatusReducer = (
  state = initialState,
  action: SetModalStatusAction,
) => {
  switch (action.type) {
    case 'SET_MODAL_STATUS':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default setModalStatusReducer;
