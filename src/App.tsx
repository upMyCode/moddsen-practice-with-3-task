import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PATHS from './constants/paths/paths';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

function App() {
  const { HOME, SEARCH } = PATHS;
  return (
    <Router>
      <Routes>
        <Route path={HOME} element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path={SEARCH} element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
