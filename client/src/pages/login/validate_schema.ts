import * as Yup from 'yup';

export const usernameValidation = Yup.string()
  .required('* Please enter your username')
  .matches(/^[a-zA-Z0-9]*$/, '* Username cannot contain special characters');

export const passwordValidation = Yup.string()
  .required('* Please enter your password')
  .min(6, 'Password must be between 6 and 32 characters long')
  .max(32, 'Password must be between 6 and 32 characters long')
  .matches(/^(?=.*[A-Z]).+$/, '* Please enter at least 1 uppercase letter')
  .matches(/^(?=.*\d).+$/, '* Please enter at least 1 number')
  .matches(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/, '* Please follow the correct format');

export const emailValidation = Yup.string()
  .required('* Please enter your email')
  .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email incorrect')

  export const phoneValidation = Yup.string()
  .required('* Please enter your phone number')
  .min(9, 'Phone number must be at least 10 characters long')
