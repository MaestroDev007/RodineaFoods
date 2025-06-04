import * as yup from 'yup';

export const SignUpSchema = yup.object().shape({
email: yup.string().email("Kindly enter a valid email address").required("Kindly Enter Your E-mail"),
password: yup.string().min(4).required("Kindly Enter Your Password"),
})