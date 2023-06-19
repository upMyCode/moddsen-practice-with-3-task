import TypeSetCurrentUserInfoAction from './TypeSetCurrentUserInfoAction'

const initialState: null = null
const setCurrentUserInfoReducer = (
  state: null = initialState,
  action: TypeSetCurrentUserInfoAction
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
