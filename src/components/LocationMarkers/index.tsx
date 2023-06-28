import React, { useEffect, useState } from 'react';
import { useMapEvents } from 'react-leaflet';
import { useSelector } from 'react-redux';

import getSightsDataNearby from '../../api';
import { chooseUserSights, getAllSights, getCategory } from '../../helpers';
import usePosition from '../../hooks/usePosition';
import type { TypeRootState } from '../../store';
import CustomMarker from '../CustomMarker';
import type { Features } from './types';

function LocationMarkers() {
  const { coords } = usePosition();
  // Next feature for error boundary
  const [error, setError] = useState<string>('');
  const category = useSelector(
    (state: TypeRootState) => state.setSearchCategoriesReducer.category,
  );
  const radius = useSelector(
    (state: TypeRootState) => state.setDistanceRadiusReducer.radius,
  );
  const [markers, setMarkers] = useState<Array<any>>([]);

  const initialMarker = {
    id: '33565635',
    properties: { name: 'I m here', kinds: 'user' },
    geometry: { coordinates: [coords[1], coords[0]] },
  };

  useEffect(() => {
    try {
      const handleGetSight = async () => {
        const searchRadius = radius.toString();

        const sightsList = await getSightsDataNearby(coords, searchRadius);

        if (typeof sightsList !== 'string' && sightsList) {
          const sortedSights = getAllSights(sightsList);

          if (sortedSights.length !== 0 && sortedSights) {
            const sights = chooseUserSights(sortedSights, category);
            setMarkers([initialMarker, ...sights]);
          } else {
            setMarkers([initialMarker]);
          }
        } else {
          setMarkers([initialMarker]);

          if (sightsList) {
            setError(sightsList);
          }
        }
      };

      void handleGetSight();
    } catch (e: unknown) {
      if (e instanceof Error) {
        return setError(e.message);
      }
    }
  }, [coords, radius, category]);

  const map = useMapEvents({
    click: () => map.locate(),
  });

  return (
    <>
      {markers.map((elem: Features) => {
        const { coordinates } = elem.geometry;

        if (coordinates) {
          const categoryMarker = getCategory(elem);

          return (
            <CustomMarker
              key={elem.id}
              icon={categoryMarker}
              position={[coordinates[1], coordinates[0]]}
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
