import { TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { MyMap } from './styled'
import ChangeView from '../ChangeView'
import { usePosition } from '../../hooks/usePosition'
import LocationMarkers from '../LocationMarkers'

const Map = () => {
  const height: string = '100vh'
  const { coords, zoom } = usePosition()

  return (
    <MyMap height={height} center={coords} zoom={zoom}>
      <ChangeView />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <LocationMarkers />
    </MyMap>
  )
}

export default Map
