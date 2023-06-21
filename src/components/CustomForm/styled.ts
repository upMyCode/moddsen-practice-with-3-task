import styled from 'styled-components';

const UserSignUpFormListInput = styled.input<{ error: undefined | string }>`
  width: 100%;
  padding: 10px 8px 10px 12px;
  border-radius: 6px;
  appearance: none;
  border: ${(props) =>
    props.error ? '0.1px solid #ef4444;' : '0.1px solid grey;'};

  &::placeholder {
    color: grey;
  }
`;

const CustomFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CustomFormError = styled.p`
  color: #ef4444;
  font-size: 14px;
`;

export { CustomFormError, CustomFormWrapper, UserSignUpFormListInput };
