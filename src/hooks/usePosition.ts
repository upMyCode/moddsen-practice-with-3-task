import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { TypeRootState } from '../store';
import { setUserPositionAction } from '../store/action';

const usePosition = () => {
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const locationData = useSelector(
    (state: TypeRootState) => state.setUserPositionReducer,
  );

  const { coords, zoom } = locationData;

  useEffect(() => {
    const onChange = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;

      dispatch(
        setUserPositionAction({
          coords: [latitude, longitude],
          zoom: 12,
        }),
      );
    };

    const onError = (e: GeolocationPositionError) => {
      setError(e.message);
    };

    const geo = navigator.geolocation;

    if (!geo) {
      setError('Not support geolocation');
      return;
    }

    const watcher = geo.watchPosition(onChange, onError);

    return () => geo.clearWatch(watcher);
  }, []);

  return { coords, zoom, error };
};

export default usePosition;
