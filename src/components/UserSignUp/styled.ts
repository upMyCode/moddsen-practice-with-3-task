import styled from 'styled-components'

const UserSignUpWrapper = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 6px;
  max-width: 500px;
  margin-top: 32px;
`
const UserSignUpInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const UserSignUpHeader = styled.h1`
  font-size: 30px;
  line-height: 36px;
  color: rgb(107 114 128);
  margin-top: 12px;
`
const UserSignUpForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`
const UserSignUpFormList = styled.div`
  display: flex;
  flex-direction: column;
  width: 345px;
`
const UserSignUpFormListItem = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
`
const UserSignUpFormListInput = styled.input`
  width: 100%;
  padding: 12px 8px 8px 12px;
  border-radius: 6px;
  appearance: none;
  border: 0.1px solid grey;
  &::placeholder {
    color: grey;
  }
`
const UserSignUpFormButton = styled.button`
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
`
export {
  UserSignUpWrapper,
  UserSignUpInfo,
  UserSignUpHeader,
  UserSignUpForm,
  UserSignUpFormList,
  UserSignUpFormListItem,
  UserSignUpFormListInput,
  UserSignUpFormButton,
}
