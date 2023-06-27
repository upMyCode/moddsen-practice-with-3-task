import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import BookIcon from '../../assets/img/bookIcon.png';
import ExitLogoIcon from '../../assets/img/exitIcon.png';
import Logo from '../../assets/img/logo.png';
import SearchIcon from '../../assets/img/searchIcon.png';
import userProfileIcon from '../../assets/img/userProfile.png';
import PATHS from '../../constants/paths/paths';
import { setModalStatusAction } from '../../store/action';
import {
  NavbarContainer,
  NavbarItem,
  NavbarItemImg,
  NavbarList,
} from './styled';

function Navbar() {
  const dispatch = useDispatch();
  const [isLogInStatus, setLogInStatus] = useState<boolean>(false);
  const isUserAuth = Cookies.get('user');
  const navigate = useNavigate();
  const { HOME, SEARCH } = PATHS;

  const handleRoute = (page: string) => {
    navigate(page);
  };

  useEffect(() => {
    setLogInStatus(!!isUserAuth);
  }, [isUserAuth]);

  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem
          onClick={() => handleRoute(HOME)}
          top="30px"
          width="32px"
          height="30px"
        >
          <NavbarItemImg src={Logo} alt="logo" />
        </NavbarItem>
        {isLogInStatus && (
          <>
            <NavbarItem
              onClick={() => handleRoute(SEARCH)}
              top="40px"
              width="60px"
              height="60px"
              radius="6px"
              bgcolor="#5E7BC7;"
            >
              <NavbarItemImg src={SearchIcon} alt="logo" />
            </NavbarItem>
            <NavbarItem
              top="15px"
              width="60px"
              height="60px"
              radius="6px"
              border="3px solid #C4C4C4"
            >
              <NavbarItemImg src={BookIcon} alt="logo" />
            </NavbarItem>
          </>
        )}
      </NavbarList>
      <NavbarList>
        {isLogInStatus ? (
          <NavbarItem
            bot="38px"
            width="48px"
            height="48px"
            onClick={() =>
              dispatch(
                setModalStatusAction({ status: true, modalName: 'log-out' }),
              )
            }
          >
            <NavbarItemImg
              width="28px"
              height="28px"
              src={ExitLogoIcon}
              alt="logo"
            />
          </NavbarItem>
        ) : (
          <NavbarItem
            bot="38px"
            width="48px"
            height="48px"
            onClick={() =>
              dispatch(
                setModalStatusAction({ status: true, modalName: 'sign-up' }),
              )
            }
          >
            <NavbarItemImg
              width="48px"
              height="48px"
              src={userProfileIcon}
              alt="logo"
            />
          </NavbarItem>
        )}
      </NavbarList>
    </NavbarContainer>
  );
}

export default Navbar;
