import type { LatLngTuple } from 'leaflet';

import type {
  setCurrentUserInfoAction,
  setDistanceRadiusAction,
  setModalStatusAction,
  setSearchCategoriesAction,
  setUserPositionAction,
} from '../action';

type SetCurrentUserInfoAction = ReturnType<typeof setCurrentUserInfoAction>;
type SetDistanceRadiusAction = ReturnType<typeof setDistanceRadiusAction>;
type SetModalStatusAction = ReturnType<typeof setModalStatusAction>;
type SetSearchCategoriesAction = ReturnType<typeof setSearchCategoriesAction>;
type SetUserPositionAction = ReturnType<typeof setUserPositionAction>;

interface Coords {
  coords: LatLngTuple;
  zoom: number;
}

interface Status {
  status: boolean;
  modalName?: string;
}

interface User {
  userEmail: string | null;
  uid: string;
}

export type {
  Coords,
  SetCurrentUserInfoAction,
  SetDistanceRadiusAction,
  SetModalStatusAction,
  SetSearchCategoriesAction,
  SetUserPositionAction,
  Status,
  User,
};
