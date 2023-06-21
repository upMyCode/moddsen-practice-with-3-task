import React from 'react';

import Icon from '../../assets/img/vector.png';
import { Input, SearchIcon, Wrapper } from './styled';

interface TypeSearchBar {
  width: string;
}

function SearchBar({ width }: TypeSearchBar) {
  return (
    <Wrapper>
      <SearchIcon src={Icon} alt="search icon" />
      <Input placeholder="Место, адрес.." width={width} />
    </Wrapper>
  );
}

export default SearchBar;
