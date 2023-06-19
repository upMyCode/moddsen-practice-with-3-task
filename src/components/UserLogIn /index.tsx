import { Formik, FormikHelpers } from 'formik'
import ClearIcon from '@mui/icons-material/Clear'
import { validationSchema } from './validationSchema'
import { useDispatch } from 'react-redux'
import setModalStatusAction from '../../store/action/setModalStatusAction'
import CustomForm from '../CustomForm'
import TypeUserLogin from './TypeUserLogin'
import { signInWithEmailAndPassword } from 'firebase/auth'
import setCurrentUserInfoAction from '../../store/action/setCurrentUserInfoAction'
import { auth } from '../../firebaseApp'
import {
  Wrapper,
  Info,
  Header,
  Form,
  FormList,
  FormListItem,
  FormButton,
  HeaderButton,
  Footer,
  FooterText,
  FooterButton,
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
    values: TypeUserLogin,
    actions: FormikHelpers<TypeUserLogin>
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

  const initialValues: TypeUserLogin = {
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
        <Wrapper onClick={(e) => e.stopPropagation()}>
          <Info>
            <Header>Log in</Header>
            <HeaderButton type='button' onClick={closeModal}>
              <ClearIcon
                sx={{ color: '#6B7280', '&:hover': { color: '#000000' } }}
              />
            </HeaderButton>
          </Info>
          <Form onSubmit={handleSubmit}>
            <FormList>
              <FormListItem>
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
              </FormListItem>
              <FormListItem>
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
              </FormListItem>
              <FormListItem>
                <FormButton
                  disabled={!(isValid && dirty)}
                  isallformfilled={(isValid && dirty).toString()}
                >
                  Log in
                </FormButton>
              </FormListItem>
            </FormList>
          </Form>
          <Footer>
            <FooterText>Do you want log out?</FooterText>
            <FooterButton onClick={redirectToLogOut}> Log out</FooterButton>
          </Footer>
        </Wrapper>
      )}
    </Formik>
  )
}

export default UserLogIn
