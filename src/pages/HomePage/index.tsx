import React from 'react';
import { useSelector } from 'react-redux';

import Map from '../../components/Map';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import ViewForm from '../../components/ViewForm';
import type { TypeRootState } from '../../store';
import HomePageWrapper from '../styled';

function HomePage() {
  const redirection = useSelector(
    (state: TypeRootState) => state.setModalStatusReducer,
  );

  return (
    <HomePageWrapper>
      <ViewForm status={redirection.status} modalName={redirection.modalName} />
      <Navbar />
      <Sidebar />
      <Map />
    </HomePageWrapper>
  );
}

export default HomePage;
