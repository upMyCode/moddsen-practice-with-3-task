import { Icon } from 'leaflet';
import React, { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';

import ICON_LIST from '../../constants/iconList';
import type CustomMarkerProps from './types';

function CustomMarker({ icon, position, info }: CustomMarkerProps) {
  const { beach, burial, culture, historic, religion, unknown, user } =
    ICON_LIST;
  const [renderIcon, setRenderIcon] = useState<string>(user);

  useEffect(() => {
    switch (icon) {
      case 'historic': {
        setRenderIcon(historic);
        break;
      }
      case 'beaches': {
        setRenderIcon(beach);
        break;
      }
      case 'religion': {
        setRenderIcon(religion);
        break;
      }
      case 'user': {
        setRenderIcon(user);
        break;
      }
      case 'burial_places': {
        setRenderIcon(burial);
        break;
      }
      case 'cultural': {
        setRenderIcon(culture);
        break;
      }
      default: {
        setRenderIcon(unknown);
        break;
      }
    }
  }, [icon]);

  return (
    <Marker
      icon={
        new Icon({
          iconUrl: renderIcon,
          iconSize: [38, 38],
        })
      }
      position={position}
    >
      <Popup>{info}</Popup>
    </Marker>
  );
}

export default CustomMarker;
