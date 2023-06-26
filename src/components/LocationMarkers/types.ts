interface Geometry {
  type: string;
  coordinates: Array<number>;
}

interface Properties {
  dist: number;
  kinds: string;
  name: string;
  osm: string;
  rate: number;
  xid: string;
}
interface Features {
  type: string;
  id: string;
  geometry: Geometry;
  properties: Properties;
}

interface Locations {
  type: string;
  features: Array<Features>;
}

export type { Features, Locations };
