import ClearIcon from '@mui/icons-material/Clear'
import { useDispatch } from 'react-redux'
import setModalStatusAction from '../../store/action/setModalStatusAction'
import {
  UserLogoutWrapper,
  UserLogoutInfo,
  UserLogoutHeader,
  UserLogoutButton,
  UserLoginHeaderButton,
  UserLogoutFooter,
} from './styled'

const UserLogOut = () => {
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(setModalStatusAction({ status: false, modalName: 'log-out' }))
  }

  const handleLogout = async () => {
    dispatch(setModalStatusAction({ status: false, modalName: 'log-out' }))
    dispatch(
      setModalStatusAction({ status: true, modalName: 'log-out-confirm' })
    )
  }

  return (
    <UserLogoutWrapper onClick={(e) => e.stopPropagation()}>
      <UserLogoutInfo>
        <UserLogoutHeader>Log in</UserLogoutHeader>
        <UserLoginHeaderButton type='button' onClick={closeModal}>
          <ClearIcon
            sx={{ color: '#6B7280', '&:hover': { color: '#000000' } }}
          />
        </UserLoginHeaderButton>
      </UserLogoutInfo>
      <UserLogoutFooter>
        <UserLogoutButton onClick={handleLogout}>Log out</UserLogoutButton>
      </UserLogoutFooter>
    </UserLogoutWrapper>
  )
}

export default UserLogOut
