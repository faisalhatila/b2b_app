import * as yup from 'yup';
import { emailValidation } from './validations';

export const authSchema = yup.object({
    // email: emailValidation,
    credential: yup
        .string()
        .required('Please enter username or phonenumber'),
    password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
});
