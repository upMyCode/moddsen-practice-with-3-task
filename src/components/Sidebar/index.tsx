import {
  Wrapper,
  Input,
  RadiusContainer,
  RadiusInfo,
  Content,
  SightsContainer,
  SightsList,
  SightsInfo,
  SearchButton,
} from './styled'
import SearchBar from '../../components/SearchBar'

const Sidebar = () => {
  return (
    <Wrapper>
      <Content>
        <SearchBar width='250' />
        <SightsContainer>
          <SightsInfo>Искать :</SightsInfo>
          <SightsList>Here should be content</SightsList>
        </SightsContainer>
        <RadiusContainer>
          <RadiusInfo>В радиусe :</RadiusInfo>
          <Input placeholder='0 км' width='80' />
        </RadiusContainer>
        <SearchButton>Search</SearchButton>
      </Content>
    </Wrapper>
  )
}

export default Sidebar
