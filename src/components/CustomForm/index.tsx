import {
  UserSignUpFormListInput,
  CustomFormWrapper,
  CustomFormError,
} from './styled'

interface ICustomForm {
  formValue?: string
  formName?: string
  formOnBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
  formOnChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  formPlaceholder?: string
  error?: string | undefined
  isValid?: boolean
  touched?: boolean | undefined
  dirty?: boolean
  formType?: string
}

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
  formType,
}: ICustomForm) => {
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
    </CustomFormWrapper>
  )
}

export default CustomForm
