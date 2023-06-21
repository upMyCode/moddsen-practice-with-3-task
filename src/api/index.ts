import axios from 'axios';
import type { LatLngTuple } from 'leaflet';

// eslint-disable-next-line consistent-return
const getSightsDataNearby = async (coords: LatLngTuple, distance: string) => {
  try {
    const response = await axios.request({
      method: 'GET',
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      url: `https://api.opentripmap.com/0.1/en/places/radius?lat=${coords[0]}&lon=${coords[1]}&radius=${distance}&apikey=${process.env.REACT_APP_API_KEY}`,
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
    // eslint-disable-next-line no-empty
  } catch (e: unknown) {}
};

export default getSightsDataNearby;
