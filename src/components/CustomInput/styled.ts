import styled from 'styled-components';

const Input = styled.input<{
  error: string;
}>`
  width: 100%;
  padding: 10px 8px 10px 12px;
  border-radius: 6px;
  appearance: none;
  border: 0.1px solid ${({ error }) => (error ? '#ef4444;' : 'grey;')};

  &::placeholder {
    color: grey;
  }
`;

const CustomInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CustomInputError = styled.p`
  color: #ef4444;
  font-size: 14px;
`;

export { CustomInputError, CustomInputWrapper, Input };
