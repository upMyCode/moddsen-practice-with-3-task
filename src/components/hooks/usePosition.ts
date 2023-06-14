import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import setUserPositionAction from '../../store/action/setUserPositionAction'
import { LatLngTuple } from 'leaflet'

export const usePosition = () => {
  const [error, setError] = useState<string | null>(null)
  const dispatch = useDispatch()

  const onChange = (posLoc: any) => {
    const { latitude, longitude } = posLoc.coords
    dispatch(
      setUserPositionAction({
        coords: [latitude, longitude],
        zoom: 12,
      })
    )
  }

  const onError = (error: any) => {
    setError(error.message)
  }

  const locationData = useSelector(
    (state: RootState) => state.setUserPositionReducer
  )

  const { coords, zoom} = locationData

  useEffect(() => {
    const geo = navigator.geolocation

    if (!geo) {
      setError('Not support geolocation')
      return
    }

    let watcher = geo.watchPosition(onChange, onError)

    return () => geo.clearWatch(watcher)
  }, [])

  return { coords, zoom, error }
}
