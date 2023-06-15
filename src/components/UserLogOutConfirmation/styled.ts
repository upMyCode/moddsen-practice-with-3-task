import styled from 'styled-components'

const UserLogoutConfirmationWrapper = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 6px;
  max-width: 500px;
  margin-top: 32px;
`
const UserLogoutConfirmationInfo = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const UserLogoutConfirmationHeader = styled.h1`
  width: 400px;
  font-size: 30px;
  line-height: 36px;
  color: rgb(107 114 128);
`

const UserLoginConfirmationHeaderButton = styled.button`
  display: flex;
  align-content: center;
  background-color: white;
  border: none;
  -webkit-appearance: none;
  cursor: pointer;
} 
`

const UserLogoutConfirmationButton = styled.button`
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
const UserLogoutConfirmationFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

const UserLogoutConfirmationFooterButton = styled.button`
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
  UserLogoutConfirmationWrapper,
  UserLogoutConfirmationInfo,
  UserLogoutConfirmationHeader,
  UserLogoutConfirmationButton,
  UserLoginConfirmationHeaderButton,
  UserLogoutConfirmationFooter,
  UserLogoutConfirmationFooterButton,
}
