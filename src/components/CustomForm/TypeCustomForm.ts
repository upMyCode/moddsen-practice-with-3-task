interface TypeCustomForm {
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
  serverError?: string | null
}

export default TypeCustomForm
