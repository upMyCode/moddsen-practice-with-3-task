import IUser from './IUser'

const setCurrentUserInfoAction = (user: IUser | null) => ({
  payload: user,
  type: 'SET_CURRENT_USER',
})

export default setCurrentUserInfoAction
