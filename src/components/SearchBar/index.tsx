import React from 'react'
import { Input, Wrapper, SearchIcon } from './styled'
import Icon from '../../assets/img/vector.png'

const SearchBar = () => {
  return (
    <Wrapper>
      <SearchIcon src={Icon} alt='search icon' />
      <Input placeholder='Место, адрес..' />
    </Wrapper>
  )
}

export default SearchBar
