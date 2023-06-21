import styled from 'styled-components';

const Wrapper = styled.aside`
  background-color: white;
  height: 100vh;
  min-width: 320px;
  box-shadow: 0 10px 10px rgb(0 0 0 / 0.25);
  z-index: 10;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input<{ width: string }>`
  width: ${(props) => props.width}px;
  padding: 10px 25px 10px 20px;
  border-radius: 10px;
  border: 3px solid #c4c4c4;
`;
const RadiusContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 250px;
`;
const RadiusInfo = styled.h1`
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const SightsContainer = styled.div`
  width: 100%;
`;

const SightsList = styled.div`
  max-height: 400px;
  min-height: 350px;
  width: 100%;
  border-radius: 10px;
  border: 3px solid #c4c4c4;
`;

const SightsInfo = styled.h1`
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const SearchButton = styled.button`
  width: 100%;
  height: 38px;
  background-color: #2563eb;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  padding: 9px 17px;
  color: white;
  text-align: center;
  cursor: pointer;
  margin: 12px 0 12px 0;
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
  SightsContainer,
  SightsInfo,
  SightsList,
  Wrapper,
};
