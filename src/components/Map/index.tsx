import { useEffect } from 'react'
import { TileLayer, Marker, Popup} from 'react-leaflet'
import { Icon} from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MyMap } from './styled'
import marker from '../../assets/img/marker.png'
import { RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import setUserPositionAction from '../../store/action/setUserPositionAction'
import ChangeView from '../ChangeView'

const Map = () => {
  const height: string = '100vh'
  const customIcon = new Icon({
    iconUrl: marker,
    iconSize: [38, 38],
  })

  const location = useSelector(
    (state: RootState) => state.setUserPositionReducer
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        if (coords) {
          const { latitude, longitude } = coords
          dispatch(
            setUserPositionAction({
              coords: [latitude, longitude],
              zoom: 12,
            })
          )
        }
      })
    }
  }, [dispatch])

  return (
    <MyMap height={height} center={location.coords} zoom={location.zoom}>
      <ChangeView />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={location.coords} icon={customIcon}>
        <Popup>I'm here</Popup>
      </Marker>
    </MyMap>
  )
}

export default Map
