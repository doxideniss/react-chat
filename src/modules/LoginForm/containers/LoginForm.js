import React from 'react';
import LoginForm from '../components/LoginForm';
import {withFormik} from "formik";

import validate from 'utils/validate';

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validate: values => {
    const errors = {};

    validate({isAuth: true, errors, values});

    return errors;
  },
  handleSubmit: (values, {setSubmitting}) => {
    console.log(values);
  },
  displayName: 'LoginForm'
})(LoginForm);
