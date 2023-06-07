import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import styled from 'styled-components'

const MyMap = styled(MapContainer)<{ height: string }>`
  height: ${(props) => props.height};
  width: 100%;
`

export { MyMap }
