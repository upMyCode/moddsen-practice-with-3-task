import React from 'react';

import Modal from '../Modal';
import UserLogin from '../UserLogIn ';
import UserLogOut from '../UserLogOut';
import UserSignUp from '../UserSignUp';
import type ViewFormProps from './types';

function ViewForm({ status, modalName }: ViewFormProps) {
  return (
    <div>
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
    </div>
  );
}

export default ViewForm;
