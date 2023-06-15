import ClearIcon from '@mui/icons-material/Clear'
import { useDispatch, useSelector } from 'react-redux'
import setModalStatusAction from '../../store/action/setModalStatusAction'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebaseApp'
import { RootState } from '../../store'
import {
  UserLogoutConfirmationWrapper,
  UserLogoutConfirmationInfo,
  UserLogoutConfirmationHeader,
  UserLogoutConfirmationButton,
  UserLoginConfirmationHeaderButton,
  UserLogoutConfirmationFooter,
} from './styled'

const UserLogOutConfirmation = () => {
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(
      setModalStatusAction({ status: false, modalName: 'log-out-confirm' })
    )
  }

  const user = useSelector((state: RootState) => state.setCurrentUserInfoReducer)

  const handleLogout = async () => {
    try {
      if (user) {
        await signOut(auth)
        dispatch(
          setModalStatusAction({ status: false, modalName: 'log-out-confirm' })
        )
      } else {
        throw new Error('You are not log in to the app!')
      }
    } catch (e: unknown) {
      console.log(e)
    }
  }

  return (
    <UserLogoutConfirmationWrapper onClick={(e) => e.stopPropagation()}>
      <UserLogoutConfirmationInfo>
        <UserLogoutConfirmationHeader>
          Log out from the app?
        </UserLogoutConfirmationHeader>
        <UserLoginConfirmationHeaderButton type='button' onClick={closeModal}>
          <ClearIcon
            sx={{ color: '#6B7280', '&:hover': { color: '#000000' } }}
          />
        </UserLoginConfirmationHeaderButton>
      </UserLogoutConfirmationInfo>
      <UserLogoutConfirmationFooter>
        <UserLogoutConfirmationButton onClick={handleLogout}>
          Log out
        </UserLogoutConfirmationButton>
      </UserLogoutConfirmationFooter>
    </UserLogoutConfirmationWrapper>
  )
}

export default UserLogOutConfirmation
