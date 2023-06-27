import type { LatLngTuple } from 'leaflet';

interface CustomMarkerProps {
  icon: string | undefined;
  position: LatLngTuple;
  info: string;
}

export default CustomMarkerProps;
