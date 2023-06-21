import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('You’ve entered invalid e-mail!')
    .required('E-mail is required!'),
  password: yup
    .string()
    .matches(
      /^((?=^\S+$)(?=.*\d)(?=.*[a-zA-Z]).{8,})$/,
      'Password must be at least 8 characters, letters, numbers and no spaces!',
    )
    .required('The Password is required'),
});

export default validationSchema;
