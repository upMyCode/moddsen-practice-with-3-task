import React, { useEffect, useState } from 'react';
import { useMapEvents } from 'react-leaflet';
import { useSelector } from 'react-redux';

import getSightsDataNearby from '../../api';
import { chooseUserSights, getAllSights, getCategory } from '../../helpers';
import usePosition from '../../hooks/usePosition';
import type { TypeRootState } from '../../store';
import CustomMarker from '../CustomMarker';
import type { Locations } from './types';

function LocationMarkers() {
  const { coords } = usePosition();
  const category = useSelector(
    (state: TypeRootState) => state.setSearchCategoriesReducer.category,
  );
  const radius = useSelector(
    (state: TypeRootState) => state.setDistanceRadiusReducer.radius,
  );
  const [markers, setMarkers] = useState<Array<any>>([]);

  useEffect(() => {
    try {
      const handleGetSight = async () => {
        const initialMarker = {
          id: '33565635',
          properties: { name: 'I m here', kinds: 'user' },
          geometry: { coordinates: [coords[1], coords[0]] },
        };
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const sightsList: Locations | undefined = await getSightsDataNearby(
          coords,
          radius,
        );

        if (sightsList) {
          const sortedSights = getAllSights(sightsList);

          if (sortedSights.length !== 0 && sortedSights) {
            const sights = chooseUserSights(sortedSights, category);
            setMarkers([initialMarker, ...sights]);
          } else {
            setMarkers([initialMarker]);
          }
        }
      };

      void handleGetSight();
    } catch (e) {
      /* empty */
    }
  }, [coords, radius, category]);

  const map = useMapEvents({
    click: () => map.locate(),
  });

  return (
    <>
      {markers.map((elem) => {
        if (elem.geometry?.coordinates) {
          const coordsF = elem.geometry?.coordinates;
          const categoryMarker = getCategory(elem);

          return (
            <CustomMarker
              key={elem.id}
              icon={categoryMarker}
              position={[coordsF[1], coordsF[0]]}
              info={elem.properties.name}
            />
          );
        }
        return null;
      })}
    </>
  );
}

export default LocationMarkers;
