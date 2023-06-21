/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

import Modal from '../Modal';
import UserLogin from '../UserLogIn ';
import UserLogOut from '../UserLogOut';
import UserSignUp from '../UserSignUp';
import Wrapper from './styled';
import type TypeViewForm from './TypeViewForm';

function ViewForm({ status, modalName }: TypeViewForm) {
  return (
    <Wrapper>
      {status && modalName && (
        <Modal>
          {modalName === 'sign-up' ? (
            <UserSignUp />
          ) : modalName === 'log-in' ? (
            <UserLogin />
          ) : (
            <UserLogOut />
          )}
        </Modal>
      )}
    </Wrapper>
  );
}

export default ViewForm;
