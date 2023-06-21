import React from 'react';
import { useDispatch } from 'react-redux';

import BookIcon from '../../assets/img/bookIcon.png';
import Logo from '../../assets/img/logo.png';
import SearchIcon from '../../assets/img/searchIcon.png';
import userProfileIcon from '../../assets/img/userProfile.png';
import setModalStatusAction from '../../store/action/setModalStatusAction';
import {
  NavbarContainer,
  NavbarItem,
  NavbarItemImg,
  NavbarList,
} from './styled';

function Navbar() {
  const dispatch = useDispatch();

  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem top="30px" width="32px" height="30px">
          <NavbarItemImg src={Logo} alt="logo" />
        </NavbarItem>
        <NavbarItem
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
      </NavbarList>
      <NavbarList>
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
      </NavbarList>
    </NavbarContainer>
  );
}

export default Navbar;
