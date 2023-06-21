import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PATHS from './constants/paths/paths';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATHS.HOME} element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path={PATHS.SEARCH} element={<SearchPage />} />
      </Routes>
      <Routes>
        <Route path={PATHS.FAVOURITES} element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
