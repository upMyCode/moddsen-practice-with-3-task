import { MapContainer } from 'react-leaflet'
import styled from 'styled-components'
import TMyMap from './TMyMap'

const MyMap = styled(MapContainer)<TMyMap>`
  height: ${(props) => props.height};
  width: 100%;
`

export { MyMap }
