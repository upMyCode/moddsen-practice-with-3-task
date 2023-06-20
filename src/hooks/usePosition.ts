import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TypeRootState } from '../store'
import setUserPositionAction from '../store/action/setUserPositionAction'

export const usePosition = () => {
  const [error, setError] = useState<string | null>(null)
  const dispatch = useDispatch()
  const locationData = useSelector(
    (state: TypeRootState) => state.setUserPositionReducer
  )

  const { coords, zoom } = locationData

  useEffect(() => {
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

    const geo = navigator.geolocation

    if (!geo) {
      setError('Not support geolocation')
      return
    }

    const watcher = geo.watchPosition(onChange, onError)

    return () => geo.clearWatch(watcher)
  }, [dispatch])

  return { coords, zoom, error }
}
