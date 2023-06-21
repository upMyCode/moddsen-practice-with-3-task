import React from 'react';

import Modal from '../Modal';
import UserLogin from '../UserLogIn ';
import UserLogOut from '../UserLogOut';
import UserSignUp from '../UserSignUp';
import type TypeViewForm from './TypeViewForm';

function ViewForm({ status, modalName }: TypeViewForm) {
  return (
    <>
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
    </>
  );
}

export default ViewForm;
