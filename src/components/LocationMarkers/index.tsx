/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Icon } from 'leaflet';
import React, { useEffect, useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { useSelector } from 'react-redux';

import getSightsDataNearby from '../../api';
import marker from '../../assets/img/marker.png';
import usePosition from '../../hooks/usePosition';
import type { TypeRootState } from '../../store';
import MarkerWrapper from './styled';

function LocationMarkers() {
  const { coords } = usePosition();
  const radius = useSelector(
    (state: TypeRootState) => state.setDistanceRadiusReducer.radius,
  );
  const [markers, setMarkers] = useState<Array<any>>([]);
  const customIcon = new Icon({
    iconUrl: marker,
    iconSize: [38, 38],
  });

  useEffect(() => {
    try {
      const handleGetSight = async () => {
        const initialMarker = {
          id: '33565635',
          properties: { name: 'I m here' },
          geometry: { coordinates: [coords[1], coords[0]] },
        };
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const sightsList = await getSightsDataNearby(coords, radius);

        if (sightsList) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          setMarkers([initialMarker, ...sightsList.features]);
        } else {
          setMarkers([initialMarker]);
        }
      };

      // eslint-disable-next-line no-void
      void handleGetSight();
    } catch (e) {
      /* empty */
    }
  }, [coords, radius]);

  const map = useMapEvents({
    click: () => map.locate(),
  });

  return (
    <MarkerWrapper>
      {markers.map((elem) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (elem.geometry?.coordinates) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          const coordsF = elem.geometry?.coordinates;

          return (
            <Marker
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              key={elem.id}
              icon={customIcon}
              position={[coordsF[1], coordsF[0]]}
            >
              <Popup>{elem.properties.name}</Popup>
            </Marker>
          );
        }
        return null;
      })}
    </MarkerWrapper>
  );
}

export default LocationMarkers;
