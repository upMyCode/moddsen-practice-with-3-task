import { FirebaseError } from '@firebase/util';
import ClearIcon from '@mui/icons-material/Clear';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Formik } from 'formik';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import AUTH_ERROR_CODES from '../../constants/firebaseErorsList';
import { auth } from '../../firebaseApp';
import {
  setCurrentUserInfoAction,
  setModalStatusAction,
} from '../../store/action';
import CustomInput from '../CustomInput';
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
import type UserLoginData from './types';
import validationSchema from './validationSchema';

function UserLogIn() {
  const [serverError, setServerError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handlePropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const closeModal = () => {
    dispatch(setModalStatusAction({ status: false, modalName: 'log-in' }));
  };

  const onSubmitDataLogin = async (values: UserLoginData) => {
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
            AUTH_ERROR_CODES[errorCode as keyof typeof AUTH_ERROR_CODES],
          );
        }
      }
    }
  };

  const initialValues: UserLoginData = {
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
        <Wrapper onClick={handlePropagation}>
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
                <CustomInput
                  inputValue={values.email}
                  inputName="email"
                  inputOnBlur={handleBlur}
                  inputOnChange={handleChange}
                  inputPlaceholder="name@example.com"
                  inputType="email"
                  inputError={errors.email}
                  inputTouched={touched.email ? touched.email : !!touched.email}
                  inputIsValid={isValid}
                  inputDirty={dirty}
                />
              </FormListItem>
              <FormListItem>
                <CustomInput
                  inputValue={values.password}
                  inputName="password"
                  inputOnBlur={handleBlur}
                  inputOnChange={handleChange}
                  inputPlaceholder="Enter Password"
                  inputType="password"
                  inputError={errors.password}
                  inputTouched={
                    touched.password ? touched.password : !!touched.password
                  }
                  inputIsValid={isValid}
                  inputDirty={dirty}
                  inputServerError={serverError}
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
