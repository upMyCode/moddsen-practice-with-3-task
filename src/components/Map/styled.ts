import { MapContainer } from 'react-leaflet';
import styled from 'styled-components';

import type MyMapProps from './types';

const MyMap = styled(MapContainer)<MyMapProps>`
  height: ${({ height }) => height};
  width: 100%;
`;

export default MyMap;
