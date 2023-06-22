interface TypeGeometry {
  type: string;
  coordinates: Array<number>;
}

interface TypeProperties {
  dist: number;
  kinds: string;
  name: string;
  osm: string;
  rate: number;
  xid: string;
}
interface TypeFeatures {
  type: string;
  id: string;
  geometry: TypeGeometry;
  properties: TypeProperties;
}

interface TypeLocations {
  type: string;
  features: Array<TypeFeatures>;
}

export type { TypeFeatures, TypeLocations };
