import Map from '../../components/Map'
import Navbar from '../../components/Navbar'
import { HomePageWrapper } from '../styled'
import Modal from '../../components/Modal'
import UserSignUp from '../../components/UserSignUp'
import UserLogin from '../../components/UserLogIn '
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import UserLogOut from '../../components/UserLogOut'
import UserLogOutConfirmation from '../../components/UserLogOutConfirmation'

const HomePage = () => {
  const redirection = useSelector(
    (state: RootState) => state.setModalStatusReducer
  )

  return (
    <HomePageWrapper>
      {redirection.status && redirection.modalName === 'sign-up' && (
        <Modal>
          <UserSignUp />
        </Modal>
      )}
      {redirection.status && redirection.modalName === 'log-in' && (
        <Modal>
          <UserLogin />
        </Modal>
      )}
      {redirection.status && redirection.modalName === 'log-out' && (
        <Modal>
          <UserLogOut />
        </Modal>
      )}
      {redirection.status && redirection.modalName === 'log-out-confirm' && (
        <Modal>
          <UserLogOutConfirmation />
        </Modal>
      )}
      <Navbar />
      <Map />
    </HomePageWrapper>
  )
}

export default HomePage
