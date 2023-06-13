import React from 'react'
import Map from '../../components/Map'
import Navbar from '../../components/Navbar'
import { HomePageWrapper } from '../styled'
import Modal from '../../components/Modal'
import UserSignUp from '../../components/UserSignUp'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const HomePage = () => {
  const status = useSelector(
    (state: RootState) => state.setModalStatusReducer.status
  )
  return (
    <HomePageWrapper>
      {status && (
        <Modal>
          <UserSignUp />
        </Modal>
      )}
      <Navbar />
      <Map />
    </HomePageWrapper>
  )
}

export default HomePage
