import type { LatLngTuple } from 'leaflet';

interface LocationData {
  coords: LatLngTuple;
  zoom: number;
}

type Status = {
  status: boolean;
  modalName?: string;
};

interface User {
  userEmail: string | null;
  uid: string;
}

export type { LocationData, Status, User };
