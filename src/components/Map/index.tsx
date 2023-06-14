import { TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MyMap } from './styled'
import marker from '../../assets/img/marker.png'
import ChangeView from '../ChangeView'
import { usePosition } from '../hooks/usePosition'

const Map = () => {
  const height: string = '100vh'
  const { coords, zoom } = usePosition()
  const customIcon = new Icon({
    iconUrl: marker,
    iconSize: [38, 38],
  })

  return (
    <MyMap height={height} center={coords} zoom={zoom}>
      <ChangeView />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={coords} icon={customIcon}>
        <Popup>I'm here</Popup>
      </Marker>
    </MyMap>
  )
}

export default Map
