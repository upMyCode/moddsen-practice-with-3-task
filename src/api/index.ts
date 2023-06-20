import axios from 'axios'
import { LatLngTuple } from 'leaflet'

export const getSightsDataNearby = async (
  coords: LatLngTuple,
  distance: string
) => {
  try {
    const response = await axios.request({
      method: 'GET',
      url: `https://api.opentripmap.com/0.1/en/places/radius?lat=${coords[0]}&lon=${coords[1]}&radius=${distance}&apikey=${process.env.REACT_APP_API_KEY}`,
    })
    return response.data
  } catch (e: unknown) {}
}
