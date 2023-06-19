import Map from '../../components/Map'
import Navbar from '../../components/Navbar'
import { HomePageWrapper } from '../styled'
import { useSelector } from 'react-redux'
import { TypeRootState } from '../../store'
import ViewForm from '../../components/ViewForm'

const HomePage = () => {
  const redirection = useSelector(
    (state: TypeRootState) => state.setModalStatusReducer
  )

  return (
    <HomePageWrapper>
      <ViewForm status={redirection.status} modalName={redirection.modalName} />
      <Navbar />
      <Map />
    </HomePageWrapper>
  )
}

export default HomePage
