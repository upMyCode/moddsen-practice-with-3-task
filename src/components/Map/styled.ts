import { MapContainer } from 'react-leaflet';
import styled from 'styled-components';

import type TypeMyMap from './TypeMyMap';

const MyMap = styled(MapContainer)<TypeMyMap>`
  height: ${(props) => props.height};
  width: 100%;
`;

export default MyMap;
