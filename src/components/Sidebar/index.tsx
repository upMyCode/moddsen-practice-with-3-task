import React from 'react';
import { useDispatch } from 'react-redux';

import setDistanceRadiusAction from '../../store/action/setDistanceRadiusAction';
import SearchBar from '../SearchBar';
import {
  Content,
  Input,
  RadiusContainer,
  RadiusInfo,
  SearchButton,
  SightsContainer,
  SightsInfo,
  SightsList,
  Wrapper,
} from './styled';

function Sidebar() {
  const dispatch = useDispatch();
  const handleRadius = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDistanceRadiusAction(e.target.value));
  };
  return (
    <Wrapper>
      <Content>
        <SearchBar width="250" />
        <SightsContainer>
          <SightsInfo>Искать :</SightsInfo>
          <SightsList>Here should be content</SightsList>
        </SightsContainer>
        <RadiusContainer>
          <RadiusInfo>В радиусe :</RadiusInfo>
          <Input onChange={handleRadius} placeholder="0 м" width="80" />
        </RadiusContainer>
      </Content>
      <SearchButton>Search</SearchButton>
    </Wrapper>
  );
}

export default Sidebar;
