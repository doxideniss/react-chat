import { withFormik } from "formik";
import { connect } from "react-redux";

import RegisterForm from '../components/RegisterForm';
import validate from 'utils/validate';
import { fetchRegistration } from "redux/reducers/user";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

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
  handleSubmit: async (values, { props: { fetchRegistration, history }, setStatus, setSubmitting }) => {
    fetchRegistration(values)
      .then((status) => {
        if (status === 'success') {
          history.push('/signup/verify')
        }
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false)
      })
  },
  displayName: 'RegisterForm'
})(RegisterForm);

export default compose(
  connect(null, { fetchRegistration }),
  withRouter
)(RegistrationFormWithFormik)

