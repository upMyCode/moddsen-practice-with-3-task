import { useMap } from 'react-leaflet';

import usePosition from '../../hooks/usePosition';

function ChangeView() {
  const { coords, zoom } = usePosition();
  const map = useMap();

  map.setView(coords, zoom);

  return null;
}

export default ChangeView;
