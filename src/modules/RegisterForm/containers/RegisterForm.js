import { withFormik } from "formik";
import { connect } from "react-redux";

import RegisterForm from '../components/RegisterForm';
import validate from 'utils/validate';
import { fetchRegistration } from "redux/reducers/user";

const RegistrationFormWithFormik = withFormik({
  mapPropsToValues: () => ({
    email: '',
    fullName: '',
    password: '',
    password_2: '',
  }),
  validate: values => {
    const errors = {};

    validate({ isAuth: false, errors, values });

    return errors;
  },
  handleSubmit: (values, { props: { fetchRegistration }, setStatus, setSubmitting }) => {
    fetchRegistration(values)
      .then(({ status, message }) => {
        console.log(status);
        if (status === 'error') {
          setStatus(message);
        }
        setSubmitting(false);
      })
      .catch(() => {
        console.log('err');
        setSubmitting(false)
      })
  },
  displayName: 'RegisterForm'
})(RegisterForm);

export default connect(null, { fetchRegistration })(RegistrationFormWithFormik)

