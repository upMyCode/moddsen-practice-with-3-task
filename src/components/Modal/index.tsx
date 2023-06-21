import type { FC } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { TypeRootState } from '../../store';
import setModalStatusAction from '../../store/action/setModalStatusAction';
import { ModalContent, ModalWrapper } from './styled';
import type { TypePropsModal } from './TypePropsModal';

const Modal: FC<TypePropsModal> = ({ children }) => {
  const dispatch = useDispatch();
  const status = useSelector(
    (state: TypeRootState) => state.setModalStatusReducer.status,
  );

  const closeModalDarkPlace = () => {
    dispatch(setModalStatusAction({ status: !status }));
  };

  return (
    <>
      {status && (
        <ModalWrapper>
          <ModalContent onClick={closeModalDarkPlace}>{children}</ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;
