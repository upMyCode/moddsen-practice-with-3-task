import React from 'react'
import Map from '../../components/Map'
import Navbar from '../../components/Navbar'
import { HomePageWrapper } from '../styled'
import Modal from '../../components/Modal'
import UserSignUp from '../../components/UserSignUp'
import UserLogin from '../../components/UserLogIn '
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

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
      <Navbar />
      <Map />
    </HomePageWrapper>
  )
}

export default HomePage
