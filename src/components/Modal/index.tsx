import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { TypeRootState } from '../../store';
import { setModalStatusAction } from '../../store/action';
import { ModalContent, ModalWrapper } from './styled';
import type ModalProps from './types';

function Modal({ children }: ModalProps) {
  const dispatch = useDispatch();
  const status = useSelector(
    (state: TypeRootState) => state.setModalStatusReducer.status,
  );

  const closeModalDarkPlace = () => {
    dispatch(setModalStatusAction({ status: !status }));
  };

  return (
    <div>
      {status && (
        <ModalWrapper>
          <ModalContent onClick={closeModalDarkPlace}>{children}</ModalContent>
        </ModalWrapper>
      )}
    </div>
  );
}

export default Modal;
