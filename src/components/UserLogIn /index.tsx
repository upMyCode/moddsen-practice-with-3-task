/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
import { FirebaseError } from '@firebase/util';
import ClearIcon from '@mui/icons-material/Clear';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Formik } from 'formik';
// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY from '../../constants/firebaseErorsList';
import { auth } from '../../firebaseApp';
import setCurrentUserInfoAction from '../../store/action/setCurrentUserInfoAction';
import setModalStatusAction from '../../store/action/setModalStatusAction';
import CustomForm from '../CustomForm';
import {
  Form,
  FormButton,
  FormList,
  FormListItem,
  Header,
  HeaderButton,
  Info,
  Wrapper,
} from './styled';
import type TypeUserLogin from './TypeUserLogin';
import validationSchema from './validationSchema';

function UserLogIn() {
  const [serverError, setServerError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const redirectToLogOut = () => {
    dispatch(setModalStatusAction({ status: false, modalName: 'log-in' }));
    dispatch(setModalStatusAction({ status: true, modalName: 'log-out' }));
  };

  const closeModal = () => {
    dispatch(setModalStatusAction({ status: false, modalName: 'log-in' }));
  };

  const onSubmitDataLogin = async (values: TypeUserLogin) => {
    try {
      const existUserData = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );

      if (existUserData) {
        const { email, uid } = existUserData.user;
        const userDataForCookies = JSON.stringify({ email, uid });
        dispatch(setCurrentUserInfoAction({ userEmail: email, uid }));
        dispatch(setModalStatusAction({ status: false, modalName: 'log-in' }));
        Cookies.set('user', userDataForCookies, { expires: 7 });
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

  const initialValues: TypeUserLogin = {
    email: '',
    password: '',
  };

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
                  serverError={serverError}
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
        </Wrapper>
      )}
    </Formik>
  );
}

export default UserLogIn;
