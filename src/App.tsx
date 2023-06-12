import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PATHS from './constants/paths/paths'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={PATHS.HOME} element={<HomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
