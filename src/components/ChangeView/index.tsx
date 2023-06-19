import { useMap } from 'react-leaflet'
import { usePosition } from '../../hooks/usePosition'

const ChangeView = () => {
  const { coords, zoom } = usePosition()
  const map = useMap()

  map.setView(coords, zoom)

  return null
}

export default ChangeView
