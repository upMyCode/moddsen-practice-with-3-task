import React from 'react';

import { CustomInputError, CustomInputWrapper, Input } from './styled';
import type CustomInputProps from './types';

function CustomInput(props: CustomInputProps) {
  const {
    inputValue,
    inputName,
    inputOnBlur,
    inputOnChange,
    inputPlaceholder,
    inputError,
    inputTouched,
    inputServerError,
    inputType,
  } = props;
  return (
    <CustomInputWrapper>
      <Input
        value={inputValue}
        name={inputName}
        onBlur={inputOnBlur}
        onChange={inputOnChange}
        placeholder={inputPlaceholder}
        error={inputError}
        type={inputType}
      />
      {inputError && inputTouched && (
        <CustomInputError>* {inputError}</CustomInputError>
      )}
      {inputServerError && (
        <CustomInputError>* {inputServerError}</CustomInputError>
      )}
    </CustomInputWrapper>
  );
}

export default CustomInput;
