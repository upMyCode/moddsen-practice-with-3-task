import React from 'react'
import { Input, Wrapper, SearchIcon } from './styled'
import Icon from '../../assets/img/vector.png'

interface TypeSearchBar {
  width: string
}

const SearchBar = ({ width }: TypeSearchBar) => {
  return (
    <Wrapper>
      <SearchIcon src={Icon} alt='search icon' />
      <Input placeholder='Место, адрес..' width={width} />
    </Wrapper>
  )
}

export default SearchBar
