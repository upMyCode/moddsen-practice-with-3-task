import React from 'react'
import { LatLngTuple } from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { MyMap } from './styled'
const Map = () => {
  const position: LatLngTuple | undefined = [51.505, -0.09]
  const height: string = '701px'

  return (
    <MyMap height={height} center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MyMap>
  )
}

export default Map
