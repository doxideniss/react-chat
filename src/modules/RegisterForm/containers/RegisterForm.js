import RegisterForm from '../components/RegisterForm';
import {withFormik} from "formik";

import validate from 'utils/validate';

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    username: '',
    password: '',
    password_2: '',
  }),
  validate: values => {
    const errors = {};

    validate({isAuth: false, errors, values});

    return errors;
  },
  handleSubmit: (values, {setSubmitting}) => {
    console.log(values);
  },
  displayName: 'RegisterForm'
})(RegisterForm);

