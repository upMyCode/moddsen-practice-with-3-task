import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 6px;
  max-width: 420px;
  margin-top: 32px;
`;
const Info = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Header = styled.h1`
  width: 350px;
  font-size: 30px;
  line-height: 36px;
  color: rgb(107 114 128);
  text-align: center;
`;

const Button = styled.button<{ color: string }>`
  width: 100px;
  height: 38px;
  background-color: ${(props) => {
    if (props.color === 'confirm') {
      return '#249c48';
    }
    if (props.color === 'reject') {
      return '#ffffff';
    }
    return '';
  }};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  padding: 9px 17px;
  color: ${(props) => {
    if (props.color === 'confirm') {
      return '#ffffff';
    }
    if (props.color === 'reject') {
      return '#d91414';
    }
    return '';
  }};
  text-align: center;
  cursor: pointer;
  margin: 12px 0 12px 0;
  border: ${(props) => {
    if (props.color === 'confirm') {
      return 'none';
    }
    if (props.color === 'reject') {
      return '1px solid #d91414';
    }
    return '';
  }};
  margin-top: 40px;
  margin: 0 20px 20px 20px;
  &: focus {
    outline: none;
  }
  &: hover {
    background-color: ${(props) => {
    if (props.color === 'confirm') {
      return '#077528';
    }
    if (props.color === 'reject') {
      return '#ffffff';
    }
    return '';
  }};
    border: ${(props) => {
    if (props.color === 'confirm') {
      return 'none';
    }
    if (props.color === 'reject') {
      return '1px solid #f50717';
    }

    return '';
  }}
    color: ${(props) => {
    if (props.color === 'confirm') {
      return '#ffffff';
    }
    if (props.color === 'reject') {
      return '#f50717';
    }
    return '';
  }};
  }
`;
const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export { Button, Footer, Header, Info, Wrapper };
