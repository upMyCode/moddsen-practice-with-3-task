import { useSelector } from 'react-redux'
import { useMap } from 'react-leaflet'
import { RootState } from '../../store'

const ChangeView = () => {
  const location = useSelector(
    (state: RootState) => state.setUserPositionReducer
  )
  const map = useMap()

  map.setView(location.coords, location.zoom)

  return null
}

export default ChangeView
