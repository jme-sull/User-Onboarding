import * as yup from 'yup'

const formSchema = yup.object().shape({
    first_name: yup.string()
    .trim()
    .required('First name is required'),
    last_name: yup.string()
    .trim()
    .required('Last name is required'),
    email: yup.string()
    .email('Must be a valid email address')
    .required('Email is required'),
    password: yup.string()
    .trim()
    .required()
    .min(5, 'Password must be at least 5 characters long'),
    terms_of_service: yup.boolean()
    .required('Terms and conditions must be accepted')
    .oneOf([true], 'Terms and conditions must be accepted')

});

export default formSchema