import { Formik, FormikHelpers } from 'formik'
import ClearIcon from '@mui/icons-material/Clear'
import { validationSchema } from './validationSchema'
import { useDispatch } from 'react-redux'
import setModalStatusAction from '../../store/action/setModalStatusAction'
import CustomForm from '../CustomForm'
import IUserLogin from './IUserLogin'
import { signInWithEmailAndPassword } from 'firebase/auth'
import setCurrentUserInfoAction from '../../store/action/setCurrentUserInfoAction'
import { auth } from '../../firebaseApp'
import {
  UserLoginWrapper,
  UserLoginInfo,
  UserLoginHeader,
  UserLoginForm,
  UserLoginFormList,
  UserLoginFormListItem,
  UserLoginFormListInput,
  UserLoginFormButton,
  UserLoginHeaderButton,
  UserLoginFooter,
  UserLoginFooterButton,
  UserLoginFooterText,
} from './styled'

const UserLogIn = () => {
  const dispatch = useDispatch()

  const redirectToLogOut = () => {
    dispatch(setModalStatusAction({ status: false, modalName: 'log-in' }))
    dispatch(setModalStatusAction({ status: true, modalName: 'log-out' }))
  }

  const closeModal = () => {
    dispatch(setModalStatusAction({ status: false, modalName: 'log-in' }))
  }

  const onSubmitDataLogin = async (
    values: IUserLogin,
    actions: FormikHelpers<IUserLogin>
  ) => {
    try {
      const existUserData = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      )

      if (existUserData) {
        const { email, uid } = existUserData.user
        dispatch(setCurrentUserInfoAction({ userEmail: email, uid }))
      }
    } catch (e: unknown) {}
  }

  const initialValues: IUserLogin = {
    email: '',
    password: '',
  }

  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      onSubmit={onSubmitDataLogin}
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
        <UserLoginWrapper onClick={(e) => e.stopPropagation()}>
          <UserLoginInfo>
            <UserLoginHeader>Log in</UserLoginHeader>
            <UserLoginHeaderButton type='button' onClick={closeModal}>
              <ClearIcon
                sx={{ color: '#6B7280', '&:hover': { color: '#000000' } }}
              />
            </UserLoginHeaderButton>
          </UserLoginInfo>
          <UserLoginForm onSubmit={handleSubmit}>
            <UserLoginFormList>
              <UserLoginFormListItem>
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
              </UserLoginFormListItem>
              <UserLoginFormListItem>
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
              </UserLoginFormListItem>
              <UserLoginFormListItem>
                <UserLoginFormButton
                  disabled={!(isValid && dirty)}
                  isallformfilled={(isValid && dirty).toString()}
                >
                  Log in
                </UserLoginFormButton>
              </UserLoginFormListItem>
            </UserLoginFormList>
          </UserLoginForm>
          <UserLoginFooter>
            <UserLoginFooterText>Do you want log out?</UserLoginFooterText>
            <UserLoginFooterButton onClick={redirectToLogOut}>
              {' '}
              Log out
            </UserLoginFooterButton>
          </UserLoginFooter>
        </UserLoginWrapper>
      )}
    </Formik>
  )
}

export default UserLogIn
