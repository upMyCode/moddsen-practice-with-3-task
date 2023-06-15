import styled from 'styled-components'

const UserLogoutWrapper = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 6px;
  max-width: 340px;
  margin-top: 32px;
`
const UserLogoutInfo = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const UserLogoutHeader = styled.h1`
  width: 250px;
  font-size: 30px;
  line-height: 36px;
  color: rgb(107 114 128);
`

const UserLoginHeaderButton = styled.button`
  display: flex;
  align-content: center;
  background-color: white;
  border: none;
  -webkit-appearance: none;
  cursor: pointer;
} 
`

const UserLogoutButton = styled.button`
  width: 268px;
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
  margin-top: 40px;
  &: focus {
    outline: none;
  }
`
const UserLogoutFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
const UserLogoutFooterText = styled.p`
  margin-right: 4px;
`
const UserLogoutFooterButton = styled.button`
  color: #2563eb;
  border: none;
  background-color: #ffffff;
  -webkit-appearance: none;
  cursor: pointer;
  &: hover {
    text-decoration: underline;
  }
`

export {
  UserLogoutWrapper,
  UserLogoutInfo,
  UserLogoutHeader,
  UserLogoutButton,
  UserLoginHeaderButton,
  UserLogoutFooter,
  UserLogoutFooterText,
  UserLogoutFooterButton,
}
