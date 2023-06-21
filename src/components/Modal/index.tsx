import type { FC } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { TypeRootState } from '../../store';
import setModalStatusAction from '../../store/action/setModalStatusAction';
import { ModalContainer, ModalContent, ModalWrapper } from './styled';
import type { TypePropsModal } from './TypePropsModal';

// eslint-disable-next-line react/function-component-definition
const Modal: FC<TypePropsModal> = ({ children }) => {
  const dispatch = useDispatch();
  const status = useSelector(
    (state: TypeRootState) => state.setModalStatusReducer.status,
  );

  const closeModalDarkPlace = () => {
    dispatch(setModalStatusAction({ status: !status }));
  };

  return (
    <ModalContainer>
      {status && (
        <ModalWrapper>
          <ModalContent onClick={closeModalDarkPlace}>{children}</ModalContent>
        </ModalWrapper>
      )}
    </ModalContainer>
  );
};

export default Modal;
