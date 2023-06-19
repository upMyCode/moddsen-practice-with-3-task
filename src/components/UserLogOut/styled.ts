import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 6px;
  max-width: 420px;
  margin-top: 32px;
`
const Info = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Header = styled.h1`
  width: 350px;
  font-size: 30px;
  line-height: 36px;
  color: rgb(107 114 128);
`

const Button = styled.button<{ color: string }>`
  width: 100px;
  height: 38px;
  background-color: ${(props) =>
    props.color === 'confirm'
      ? '#249c48'
      : props.color === 'reject'
      ? '#ffffff'
      : ''};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  padding: 9px 17px;
  color: ${(props) =>
    props.color === 'confirm'
      ? '#ffffff'
      : props.color === 'reject'
      ? '#d91414'
      : ''};
  text-align: center;
  cursor: pointer;
  margin: 12px 0 12px 0;
  border: ${(props) =>
    props.color === 'confirm'
      ? 'none'
      : props.color === 'reject'
      ? '1px solid #d91414'
      : ''};
  margin-top: 40px;
  margin: 0 20px 20px 20px;
  &: focus {
    outline: none;
  }
  &: hover {
    background-color: ${(props) =>
      props.color === 'confirm'
        ? '#077528'
        : props.color === 'reject'
        ? '#ffffff'
        : ''};
    border: ${(props) =>
      props.color === 'confirm'
        ? 'none'
        : props.color === 'reject'
        ? '1px solid #f50717'
        : ''};

    color: ${(props) =>
      props.color === 'confirm'
        ? '#ffffff'
        : props.color === 'reject'
        ? '#f50717'
        : ''};
  }
`
const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

export { Wrapper, Info, Header, Button, Footer }
