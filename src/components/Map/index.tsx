import 'leaflet/dist/leaflet.css';

import React from 'react';
import { TileLayer } from 'react-leaflet';

import usePosition from '../../hooks/usePosition';
import ChangeView from '../ChangeView';
import LocationMarkers from '../LocationMarkers';
import MyMap from './styled';

function Map() {
  const { coords, zoom } = usePosition();

  return (
    <MyMap height="100vh" center={coords} zoom={zoom}>
      <ChangeView />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarkers />
    </MyMap>
  );
}

export default Map;
