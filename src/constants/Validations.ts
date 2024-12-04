import * as yup from 'yup';

const requiredErrorMessage = 'This field is required';
const emailErrorMessage = 'Invalid email address';

export const contactValidationSchema = yup.object().shape({
    email: yup.string().email(emailErrorMessage).required(requiredErrorMessage),
    name: yup.string().required(requiredErrorMessage),
    subject: yup.string().required(requiredErrorMessage),
    message: yup.string().required(requiredErrorMessage),
  });