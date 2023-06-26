interface CustomInputProps {
  inputValue: string;
  inputName: string;
  inputOnBlur: React.FocusEventHandler<HTMLInputElement> | undefined;
  inputOnChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  inputPlaceholder: string;
  inputError: string | undefined;
  inputIsValid: boolean;
  inputTouched: boolean | undefined;
  inputDirty: boolean;
  inputType: string;
  inputServerError?: string | null;
}

export default CustomInputProps;
