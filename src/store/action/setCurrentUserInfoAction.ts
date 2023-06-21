import type TypeUser from './TypeUser';

const setCurrentUserInfoAction = (user: TypeUser | null) => ({
  payload: user,
  type: 'SET_CURRENT_USER',
});

export default setCurrentUserInfoAction;
