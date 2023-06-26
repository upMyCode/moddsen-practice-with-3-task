import { Icon } from 'leaflet';
import React from 'react';
import { Marker, Popup } from 'react-leaflet';

import beach from '../../assets/img/beach.png';
import burial from '../../assets/img/burial.png';
import culture from '../../assets/img/culture.png';
import historic from '../../assets/img/historic.png';
import user from '../../assets/img/marker.png';
import religion from '../../assets/img/religion.png';
import unknown from '../../assets/img/unknown.png';

function CustomMarker({ key, icon, position, info }: any) {
  let renderIcon = '';

  switch (icon) {
    case 'historic': {
      renderIcon = historic;
      break;
    }
    case 'beaches': {
      renderIcon = beach;
      break;
    }
    case 'religion': {
      renderIcon = religion;
      break;
    }
    case 'user': {
      renderIcon = user;
      break;
    }
    case 'burial_places': {
      renderIcon = burial;
      break;
    }
    case 'cultural': {
      renderIcon = culture;
      break;
    }
    default: {
      renderIcon = unknown;
      break;
    }
  }

  const customIcon = new Icon({
    iconUrl: renderIcon,
    iconSize: [38, 38],
  });
  return (
    <Marker key={key} icon={customIcon} position={position}>
      <Popup>{info}</Popup>
    </Marker>
  );
}

export default CustomMarker;
