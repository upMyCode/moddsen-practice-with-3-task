import React, { useState } from 'react'
import { LatLngTuple } from 'leaflet'
import { TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon, divIcon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MyMap } from './styled'
import marker from '../../assets/img/marker.png'

const Map = () => {
  const [coords, setCoords] = useState<LatLngTuple>()
  const position: LatLngTuple | undefined = [51.505, -0.09]
  const height: string = '701px'
  const customIcon = new Icon({
    iconUrl: marker,
    iconSize: [38, 38],
  })

  const success = ({ coords }: any) => {
    const { latitude, longitude } = coords
    const position: LatLngTuple = [latitude, longitude]

    setCoords(position)
  }

  const error = ({ message }: any) => {
    console.log(message)
  }

  navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true,
  })

  return (
    <MyMap height={height} center={coords ? coords : position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MyMap>
  )
}

export default Map
