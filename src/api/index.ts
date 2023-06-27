import axios from 'axios';
import type { LatLngTuple } from 'leaflet';

import type { LocationsAPI } from '../components/LocationMarkers/types';

const getSightsDataNearby = async (coords: LatLngTuple, distance: string) => {
  try {
    const { data }: LocationsAPI = await axios.request({
      method: 'GET',
      url: `${process.env.REACT_APP_GET_SIGHTS_API || ''}radius?lat=${
        coords[0]
      }&lon=${coords[1]}&radius=${distance}&apikey=${
        process.env.REACT_APP_API_KEY || ''
      }`,
    });

    if (data) {
      return data;
    }
  } catch (e: unknown) {
    /* empty */
  }
};

export default getSightsDataNearby;
