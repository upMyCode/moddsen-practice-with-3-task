import { Formik, FormikHelpers } from 'formik'
import ClearIcon from '@mui/icons-material/Clear'
import { validationSchema } from './validationSchema'
import { useDispatch } from 'react-redux'
import setModalStatusAction from '../../store/action/setModalStatusAction'
import setCurrentUserInfoAction from '../../store/action/setCurrentUserInfoAction'
import CustomForm from '../../components/CustomForm'
import IUserSignUp from './IUserSignUp'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseApp'
import {
  UserSignUpWrapper,
  UserSignUpInfo,
  UserSignUpHeader,
  UserSignUpForm,
  UserSignUpFormList,
  UserSignUpFormListItem,
  UserSignUpFormListInput,
  UserSignUpFormButton,
  UserSignUpHeaderButton,
  UserSignUpFooter,
  UserSignUpFooterButton,
  UserSignUpFooterText,
} from './styled'

const UserSignUp = () => {
  const dispatch = useDispatch()

  const redirectToLogIn = () => {
    dispatch(setModalStatusAction({ status: false, modalName: 'sign-up' }))
    dispatch(setModalStatusAction({ status: true, modalName: 'log-in' }))
  }

  const closeModal = () => {
    dispatch(setModalStatusAction({ status: false, modalName: 'sign-up' }))
  }

  const onSubmitDataSignUp = async (
    values: IUserSignUp,
    actions: FormikHelpers<IUserSignUp>
  ) => {
    try {
      const registredUser = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      )

      if (registredUser) {
        dispatch(setModalStatusAction({ status: false, modalName: 'sign-up' }))
        dispatch(setModalStatusAction({ status: true, modalName: 'log-in' }))
      }
    } catch (e: any) {
      console.log(e.code)
    }
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
            <UserSignUpHeaderButton type='button' onClick={closeModal}>
              <ClearIcon
                sx={{ color: '#6B7280', '&:hover': { color: '#000000' } }}
              />
            </UserSignUpHeaderButton>
          </UserSignUpInfo>
          <UserSignUpForm onSubmit={handleSubmit}>
            <UserSignUpFormList>
              <UserSignUpFormListItem>
                <CustomForm
                  formValue={values.email}
                  formName='email'
                  formOnBlur={handleBlur}
                  formOnChange={handleChange}
                  formPlaceholder='name@example.com'
                  formType='email'
                  error={errors.email}
                  touched={touched.email}
                  isValid={isValid}
                  dirty={dirty}
                />
              </UserSignUpFormListItem>
              <UserSignUpFormListItem>
                <CustomForm
                  formValue={values.password}
                  formName='password'
                  formOnBlur={handleBlur}
                  formOnChange={handleChange}
                  formPlaceholder='Enter Password'
                  formType='password'
                  error={errors.password}
                  touched={touched.password}
                  isValid={isValid}
                  dirty={dirty}
                />
              </UserSignUpFormListItem>
              <UserSignUpFormListItem>
                <CustomForm
                  formValue={values.confirm_password}
                  formName='confirm_password'
                  formOnBlur={handleBlur}
                  formOnChange={handleChange}
                  formType='password'
                  formPlaceholder='Repeat Password'
                  error={errors.confirm_password}
                  touched={touched.confirm_password}
                  isValid={isValid}
                  dirty={dirty}
                />
              </UserSignUpFormListItem>
              <UserSignUpFormListItem>
                <UserSignUpFormButton
                  disabled={!(isValid && dirty)}
                  isallformfilled={(isValid && dirty).toString()}
                >
                  Create account
                </UserSignUpFormButton>
              </UserSignUpFormListItem>
            </UserSignUpFormList>
          </UserSignUpForm>
          <UserSignUpFooter>
            <UserSignUpFooterText>
              Already have an account?
            </UserSignUpFooterText>
            <UserSignUpFooterButton onClick={redirectToLogIn}>
              {' '}
              Log in!{' '}
            </UserSignUpFooterButton>
          </UserSignUpFooter>
        </UserSignUpWrapper>
      )}
    </Formik>
  )
}

export default UserSignUp
