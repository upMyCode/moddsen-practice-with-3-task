/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { TypeRootState } from '../store';
import setUserPositionAction from '../store/action/setUserPositionAction';

const usePosition = () => {
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const locationData = useSelector(
    (state: TypeRootState) => state.setUserPositionReducer,
  );

  const { coords, zoom } = locationData;

  useEffect(() => {
    const onChange = (posLoc: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      const { latitude, longitude } = posLoc.coords;

      dispatch(
        setUserPositionAction({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          coords: [latitude, longitude],
          zoom: 12,
        }),
      );
    };

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const onError = (error: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setError(error.message);
    };

    const geo = navigator.geolocation;

    if (!geo) {
      setError('Not support geolocation');
      return;
    }

    const watcher = geo.watchPosition(onChange, onError);

    // eslint-disable-next-line consistent-return
    return () => geo.clearWatch(watcher);
  }, [dispatch]);

  return { coords, zoom, error };
};

export default usePosition;
