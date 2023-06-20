import { useState, useEffect } from 'react'
import { usePosition } from '../../hooks/usePosition'
import { getSightsDataNearby } from '../../api'
import { useMapEvents, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import marker from '../../assets/img/marker.png'

const LocationMarkers = () => {
  const { coords } = usePosition()
  const [markers, setMarkers] = useState<Array<any>>([])
  const customIcon = new Icon({
    iconUrl: marker,
    iconSize: [38, 38],
  })

  useEffect(() => {
    const handleGetSight = async () => {
      const initialMarker = {
        id: '33565635',
        properties: { name: 'I m here' },
        geometry: { coordinates: [coords[1], coords[0]] },
      }
      const sightsList = await getSightsDataNearby(coords, '1000')

      if (sightsList.features) {
        setMarkers([initialMarker, ...sightsList.features])
      }
    }

    handleGetSight()
  }, [coords])

  const map = useMapEvents({
    click: () => map.locate(),
  })

  return (
    <>
      {markers.map((marker) => {
        if (marker.geometry?.coordinates) {
          let coordsF = marker.geometry?.coordinates

          return (
            <Marker
              key={marker.id}
              icon={customIcon}
              position={[coordsF[1], coordsF[0]]}
            >
              <Popup>{marker.properties.name}</Popup>
            </Marker>
          )
        } else {
          return null
        }
      })}
    </>
  )
}

export default LocationMarkers
