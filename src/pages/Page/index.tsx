import React from 'react';
import { useSelector } from 'react-redux';

import Map from '../../components/Map';
import Navbar from '../../components/Navbar';
import ViewForm from '../../components/ViewForm';
import type { TypeRootState } from '../../store';
import PageWrapper from '../styled';
import type PageProps from './types';

function Page({ children }: PageProps) {
  const redirection = useSelector(
    (state: TypeRootState) => state.setModalStatusReducer,
  );

  return (
    <PageWrapper>
      <ViewForm status={redirection.status} modalName={redirection.modalName} />
      <Navbar />
      {children}
      <Map />
    </PageWrapper>
  );
}

export default Page;
