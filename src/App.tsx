import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PATHS from './constants/paths/paths';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATHS.HOME} element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
