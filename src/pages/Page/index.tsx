import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useSelector } from 'react-redux';

import ErrorFallback from '../../components/ErrorFallback';
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
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Map />
      </ErrorBoundary>
    </PageWrapper>
  );
}

export default Page;
