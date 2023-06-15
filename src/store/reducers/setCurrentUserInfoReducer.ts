import TSetCurrentUserInfoAction from './TSetCurrentUserInfoAction'

const initialState: null = null
const setCurrentUserInfoReducer = (
  state: null = initialState,
  action: TSetCurrentUserInfoAction
) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...action.payload,
      }
    default:
      return state
  }
}

export default setCurrentUserInfoReducer
