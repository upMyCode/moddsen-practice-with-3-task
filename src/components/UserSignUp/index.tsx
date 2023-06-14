import { Formik, FormikHelpers } from 'formik'
import ClearIcon from '@mui/icons-material/Clear'
import { validationSchema } from './validationSchema'
import IUserSignUp from './IUserSignUp'
import {
  UserSignUpWrapper,
  UserSignUpInfo,
  UserSignUpHeader,
  UserSignUpForm,
  UserSignUpFormList,
  UserSignUpFormListItem,
  UserSignUpFormListInput,
  UserSignUpFormButton,
} from './styled'

const UserSignUp = () => {
  const redirectToLogIn = () => {
    console.log('login')
    console.log('redirect')
  }

  const closeModal = () => {
    console.log('close')
  }

  const onSubmitDataSignUp = async (
    values: IUserSignUp,
    actions: FormikHelpers<IUserSignUp>
  ) => {
    console.log(values)
  }

  const initialValues: IUserSignUp = {
    email: '',
    password: '',
    confirm_password: '',
  }

  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      onSubmit={onSubmitDataSignUp}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => (
        <UserSignUpWrapper onClick={(e) => e.stopPropagation()}>
          <UserSignUpInfo>
            <UserSignUpHeader>Sign up</UserSignUpHeader>
            <button type='button' onClick={closeModal}>
              <ClearIcon />
            </button>
          </UserSignUpInfo>
          <UserSignUpForm onSubmit={handleSubmit}>
            <UserSignUpFormList>
              <UserSignUpFormListItem>
                <UserSignUpFormListInput
                  value={values.email}
                  name='email'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder='name@example.com'
                />
              </UserSignUpFormListItem>
              <UserSignUpFormListItem>
                <UserSignUpFormListInput
                  value={values.password}
                  name='password'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder='Enter Password'
                />
              </UserSignUpFormListItem>
              <UserSignUpFormListItem>
                <UserSignUpFormListInput
                  value={values.confirm_password}
                  name='confirm_password'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder='Repeat Password'
                />
              </UserSignUpFormListItem>
              <UserSignUpFormListItem>
                <UserSignUpFormButton>Create account</UserSignUpFormButton>
              </UserSignUpFormListItem>
            </UserSignUpFormList>
          </UserSignUpForm>
          <div>
            <span>Already have an account?</span>
            <button onClick={redirectToLogIn}> Log in! </button>
          </div>
        </UserSignUpWrapper>
      )}
    </Formik>
  )
}

export default UserSignUp
