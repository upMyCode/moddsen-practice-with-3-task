import { signOut } from 'firebase/auth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { auth } from '../../firebaseApp';
import type { TypeRootState } from '../../store';
import setModalStatusAction from '../../store/action/setModalStatusAction';
import { Button, Footer, Header, Info, Wrapper } from './styled';

function UserLogOut() {
  const dispatch = useDispatch();
  const user = useSelector(
    (state: TypeRootState) => state.setCurrentUserInfoReducer,
  );

  const closeModal = () => {
    dispatch(setModalStatusAction({ status: false, modalName: 'log-out' }));
  };

  const handleLogout = async () => {
    try {
      if (user) {
        await signOut(auth);
        dispatch(
          setModalStatusAction({ status: false, modalName: 'log-out-confirm' }),
        );
      } else {
        throw new Error('You are not log in to the app!');
      }
    } catch (e: unknown) {
      console.log(e);
    }
  };

  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <Info>
        <Header>Log out from the app?</Header>
      </Info>
      <Footer>
        <Button color="confirm" onClick={handleLogout}>
          Log out
        </Button>
        <Button color="reject" onClick={closeModal}>
          Exit
        </Button>
      </Footer>
    </Wrapper>
  );
}

export default UserLogOut;
