/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useState } from 'react';
import { useMapEvents } from 'react-leaflet';
import { useSelector } from 'react-redux';

import getSightsDataNearby from '../../api';
import { chooseUserSights, getAllSights, getCategory } from '../../helpers';
import usePosition from '../../hooks/usePosition';
import type { TypeRootState } from '../../store';
import CustomMarker from '../CustomMarker';
import MarkerWrapper from './styled';
import type { TypeLocations } from './TypeLocations';

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
        const sightsList: TypeLocations | undefined = await getSightsDataNearby(
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

      // eslint-disable-next-line no-void
      void handleGetSight();
    } catch (e) {
      /* empty */
    }
  }, [coords, radius, category]);

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
          const categoryMarker = getCategory(elem);
          return (
            <CustomMarker
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              key={elem.id}
              icon={categoryMarker}
              position={[coordsF[1], coordsF[0]]}
              info={elem.properties.name}
            />
          );
        }
        return null;
      })}
    </MarkerWrapper>
  );
}

export default LocationMarkers;
