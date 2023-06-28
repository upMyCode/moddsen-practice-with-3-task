import styled from 'styled-components';

const Wrapper = styled.aside`
  background-color: white;
  height: 100vh;
  min-width: 460px;
  box-shadow: 0 10px 10px rgb(0 0 0 / 0.25);
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
`;

const Input = styled.input<{ width: string }>`
  width: ${(props) => props.width}px;
  padding: 5px 25px 10px 20px;
  border-radius: 10px;
  border: 3px solid #c4c4c4;
`;
const RadiusContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const RadiusInfo = styled.h1`
  font-size: 18px;
  margin-top: 40px;
  margin-bottom: 15px;
`;

const SightsContainer = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const SightsList = styled.div`
  max-height: 200px;
  min-height: 200px;
  width: 350px;
  border-radius: 10px;
  border: 3px solid #c4c4c4;
  overflow: scroll;
`;

const SightsInfo = styled.h1`
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const SightItem = styled.div`
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
  padding: 10px; 10px; 10px; 10px;
`;
const SearchButton = styled.button`
  width: 200px;
  height: 38px;
  background-color: #2563eb;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  padding: 9px 17px;
  color: white;
  text-align: center;
  cursor: pointer;
  margin: 12px 0 40px 0;
  border: none;
  &: focus {
    outline: none;
  }
`;
export {
  Content,
  Input,
  RadiusContainer,
  RadiusInfo,
  SearchButton,
  SightItem,
  SightsContainer,
  SightsInfo,
  SightsList,
  Wrapper,
};
