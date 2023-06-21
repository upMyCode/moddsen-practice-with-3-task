// eslint-disable-next-line import/no-extraneous-dependencies
import { FirebaseError } from '@firebase/util';
import ClearIcon from '@mui/icons-material/Clear';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY from '../../constants/firebaseErorsList';
import { auth } from '../../firebaseApp';
import setModalStatusAction from '../../store/action/setModalStatusAction';
import CustomForm from '../CustomForm';
import {
  Footer,
  FooterButton,
  FooterText,
  Form,
  FormButton,
  FormList,
  FormListItem,
  Header,
  HeaderButton,
  Info,
  Wrapper,
} from './styled';
import type TypeUserSignUp from './TypeUserSignUp';
import { validationSchema } from './validationSchema';

function UserSignUp() {
  const [serverError, setServerError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const redirectToLogIn = () => {
    dispatch(setModalStatusAction({ status: false, modalName: 'sign-up' }));
    dispatch(setModalStatusAction({ status: true, modalName: 'log-in' }));
  };

  const closeModal = () => {
    dispatch(setModalStatusAction({ status: false, modalName: 'sign-up' }));
  };

  const onSubmitDataSignUp = async (values: TypeUserSignUp) => {
    try {
      const registredUser = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );

      if (registredUser) {
        dispatch(setModalStatusAction({ status: false, modalName: 'sign-up' }));
        dispatch(setModalStatusAction({ status: true, modalName: 'log-in' }));
      }
    } catch (e: unknown) {
      if (e instanceof FirebaseError) {
        const errorCode: string = e.code;

        if (errorCode) {
          setServerError(
            AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY[
              errorCode as keyof typeof AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY
            ],
          );
        }
      }
    }
  };

  const initialValues: TypeUserSignUp = {
    email: '',
    password: '',
    confirm_password: '',
  };

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
        <Wrapper onClick={(e) => e.stopPropagation()}>
          <Info>
            <Header>Sign up</Header>
            <HeaderButton type="button" onClick={closeModal}>
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
                  formName="email"
                  formOnBlur={handleBlur}
                  formOnChange={handleChange}
                  formPlaceholder="name@example.com"
                  formType="email"
                  error={errors.email}
                  touched={touched.email}
                  isValid={isValid}
                  dirty={dirty}
                />
              </FormListItem>
              <FormListItem>
                <CustomForm
                  formValue={values.password}
                  formName="password"
                  formOnBlur={handleBlur}
                  formOnChange={handleChange}
                  formPlaceholder="Enter Password"
                  formType="password"
                  error={errors.password}
                  touched={touched.password}
                  isValid={isValid}
                  dirty={dirty}
                />
              </FormListItem>
              <FormListItem>
                <CustomForm
                  formValue={values.confirm_password}
                  formName="confirm_password"
                  formOnBlur={handleBlur}
                  formOnChange={handleChange}
                  formType="password"
                  formPlaceholder="Repeat Password"
                  error={errors.confirm_password}
                  touched={touched.confirm_password}
                  isValid={isValid}
                  dirty={dirty}
                  serverError={serverError}
                />
              </FormListItem>
              <FormListItem>
                <FormButton
                  disabled={!(isValid && dirty)}
                  isallformfilled={(isValid && dirty).toString()}
                >
                  Create account
                </FormButton>
              </FormListItem>
            </FormList>
          </Form>
          <Footer>
            <FooterText>Already have an account?</FooterText>
            <FooterButton onClick={redirectToLogIn}> Log in! </FooterButton>
          </Footer>
        </Wrapper>
      )}
    </Formik>
  );
}

export default UserSignUp;
