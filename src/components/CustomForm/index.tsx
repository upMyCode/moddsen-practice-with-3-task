import {
  UserSignUpFormListInput,
  CustomFormWrapper,
  CustomFormError,
} from './styled'
import TypeCustomForm from './TypeCustomForm'

const CustomForm = ({
  formValue,
  formName,
  formOnBlur,
  formOnChange,
  formPlaceholder,
  error,
  touched,
  isValid,
  dirty,
  serverError,
  formType,
}: TypeCustomForm) => {
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
  )
}

export default CustomForm
