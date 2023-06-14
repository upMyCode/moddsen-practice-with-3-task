import styled from 'styled-components'

const UserLoginWrapper = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 6px;
  max-width: 500px;
  margin-top: 32px;
`
const UserLoginInfo = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const UserLoginHeader = styled.h1`
  width: 345px;
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

const UserLoginForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`
const UserLoginFormList = styled.div`
  display: flex;
  flex-direction: column;
  width: 345px;
`
const UserLoginFormListItem = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
`
const UserLoginFormListInput = styled.input`
  width: 100%;
  padding: 10px 8px 10px 12px;
  border-radius: 6px;
  appearance: none;
  border: 0.1px solid grey;
  &::placeholder {
    color: grey;
  }
`
const UserLoginFormButton = styled.button<{
  isallformfilled?: string | undefined
}>`
  width: 268px;
  height: 38px;
  background-color: ${(props) =>
    props.isallformfilled === 'true' ? '#2563eb;' : '#9CA3AF;'}
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
`
const UserLoginFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
const UserLoginFooterText = styled.p`
  margin-right: 4px;
`
const UserLoginFooterButton = styled.button`
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
  UserLoginWrapper,
  UserLoginInfo,
  UserLoginHeader,
  UserLoginForm,
  UserLoginFormList,
  UserLoginFormListItem,
  UserLoginFormListInput,
  UserLoginFormButton,
  UserLoginHeaderButton,
  UserLoginFooter,
  UserLoginFooterText,
  UserLoginFooterButton,
}
