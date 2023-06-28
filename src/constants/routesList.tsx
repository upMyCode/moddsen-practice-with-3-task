import React from 'react';

import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import PATHS from './paths/paths';
import type RoutesList from './types';

const { HOME, SEARCH } = PATHS;

const ROUTES_LIST: RoutesList = [
  {
    path: HOME,
    element: <HomePage />,
  },
  {
    path: SEARCH,
    element: <SearchPage />,
  },
];

export default ROUTES_LIST;
