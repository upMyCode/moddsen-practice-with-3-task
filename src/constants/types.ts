import type { ReactElement, ReactNode } from 'react';

interface Route {
  path: string;
  element: ReactElement | ReactNode[];
}

type RoutesList = Array<Route>;

export default RoutesList;
