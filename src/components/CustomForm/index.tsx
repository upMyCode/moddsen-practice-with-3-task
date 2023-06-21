import React from 'react';

import {
  CustomFormError,
  CustomFormWrapper,
  UserSignUpFormListInput,
} from './styled';
import type TypeCustomForm from './TypeCustomForm';

function CustomForm({
  formValue,
  formName,
  formOnBlur,
  formOnChange,
  formPlaceholder,
  error,
  touched,
  serverError,
  formType,
}: TypeCustomForm) {
  return (
    <CustomFormWrapper>
      <UserSignUpFormListInput
        value={formValue}
        name={formName}
        onBlur={formOnBlur}
        onChange={formOnChange}
        placeholder={formPlaceholder}
        error={error}
        type={formType}
      />
      {error && touched && <CustomFormError>* {error}</CustomFormError>}
      {serverError && <CustomFormError>* {serverError}</CustomFormError>}
    </CustomFormWrapper>
  );
}

export default CustomForm;
