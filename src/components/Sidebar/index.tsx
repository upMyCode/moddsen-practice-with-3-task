import React from 'react';

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
          <Input placeholder="0 км" width="80" />
        </RadiusContainer>
        <SearchButton>Search</SearchButton>
      </Content>
    </Wrapper>
  );
}

export default Sidebar;
