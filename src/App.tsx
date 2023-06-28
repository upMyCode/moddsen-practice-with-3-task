import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ROUTES_LIST from './constants/routesList';

function App() {
  return (
    <Router>
      {ROUTES_LIST.map((route) => (
        <Routes key={route.path}>
          <Route path={route.path} element={route.element} />
        </Routes>
      ))}
    </Router>
  );
}

export default App;
