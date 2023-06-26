import { signOut } from 'firebase/auth';
import Cookies from 'js-cookie';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../firebaseApp';
import {
  setCurrentUserInfoAction,
  setDistanceRadiusAction,
  setModalStatusAction,
} from '../../store/action';
import { Button, Footer, Header, Info, Wrapper } from './styled';

function UserLogOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeModal = () => {
    dispatch(setModalStatusAction({ status: false, modalName: 'log-out' }));
  };

  const handlePropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleLogout = async () => {
    try {
      const userInfo = Cookies.get('user');
      if (userInfo) {
        await signOut(auth);
        dispatch(
          setModalStatusAction({ status: false, modalName: 'log-out-confirm' }),
        );
        dispatch(setDistanceRadiusAction('10'));
        dispatch(setCurrentUserInfoAction({ userEmail: null, uid: '' }));
        Cookies.remove('user', { path: '/' });
        navigate('/');
      } else {
        throw new Error('You are not log in to the app!');
      }
    } catch (e: unknown) {
      console.log(e);
    }
  };

  return (
    <Wrapper onClick={handlePropagation}>
      <Info>
        <Header>Log out from the app?</Header>
      </Info>
      <Footer>
        <Button color="confirm" onClick={handleLogout}>
          Yes
        </Button>
        <Button color="reject" onClick={closeModal}>
          No
        </Button>
      </Footer>
    </Wrapper>
  );
}

export default UserLogOut;
