import { FirebaseError } from '@firebase/util';
import ClearIcon from '@mui/icons-material/Clear';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import AUTH_ERROR_CODES from '../../constants/firebaseErorsList';
import { auth } from '../../firebaseApp';
import { setModalStatusAction } from '../../store/action';
import CustomInput from '../CustomInput';
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
import type UserSignUpData from './types';
import validationSchema from './validationSchema';

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

  const handlePropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const onSubmitDataSignUp = async (values: UserSignUpData) => {
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
            AUTH_ERROR_CODES[errorCode as keyof typeof AUTH_ERROR_CODES],
          );
        }
      }
    }
  };

  const initialValues: UserSignUpData = {
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
        <Wrapper onClick={handlePropagation}>
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
                />
              </FormListItem>
              <FormListItem>
                <CustomInput
                  inputValue={values.confirm_password}
                  inputName="confirm_password"
                  inputOnBlur={handleBlur}
                  inputOnChange={handleChange}
                  inputType="password"
                  inputPlaceholder="Repeat Password"
                  inputError={errors.confirm_password}
                  inputTouched={
                    touched.confirm_password
                      ? touched.confirm_password
                      : !!touched.confirm_password
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
