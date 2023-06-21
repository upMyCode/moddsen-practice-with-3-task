import type TypeSetModalStatusAction from './TypeSetModalStatusAction';
import type TypeStatus from './TypeStatus';

const initialState: TypeStatus = {
  status: false,
  modalName: '',
};

const setModalStatusReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action: TypeSetModalStatusAction,
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
