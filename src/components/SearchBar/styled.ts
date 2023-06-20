import styled from 'styled-components'

const Input = styled.input<{ width: string }>`
  width: ${(props) => props.width}px;
  padding: 10px 40px 10px 40px;
  border-radius: 6px;
  border: 3px solid #c4c4c4;
`
const Wrapper = styled.div`
  margin-top: 25px;
  position: relative;
`
const SearchIcon = styled.img`
  position: absolute;
  width: 14px;
  height: 14px;
  top: 32%;
  left: 6%;
`

export { Input, Wrapper, SearchIcon }
