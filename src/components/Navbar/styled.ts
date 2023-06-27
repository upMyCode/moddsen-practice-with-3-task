import styled from 'styled-components';

import type { NavbarItemImgProps, NavbarItemProps } from './types';

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 110px;
  background: #ffffff;
  border-right: 2px solid #c4c4c4;
  height: 100vh;
`;
const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavbarItem = styled.li<NavbarItemProps>`
  list-style: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ top }) => top || ''};
  margin-bottom: ${({ bot }) => bot || ''};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => radius || ''};
  background-color: ${({ bgcolor }) => bgcolor || ''};
  border: ${({ border }) => border || ''};
`;

const NavbarItemImg = styled.img<NavbarItemImgProps>`
  width: ${(props) => (props.width ? props.height : '')};
  height: ${(props) => (props.width ? props.height : '')};
`;

export { NavbarContainer, NavbarItem, NavbarItemImg, NavbarList };
