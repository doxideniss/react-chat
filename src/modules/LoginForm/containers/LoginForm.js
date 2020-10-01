import { connect } from "react-redux";
import { withFormik } from "formik";

import LoginForm from '../components/LoginForm';
import validate from 'utils/validate';
import { fetchLogin } from "redux/reducers/user";

const LoginFormWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validate: values => {
    const errors = {};

    validate({ isAuth: true, errors, values });

    return errors;
  },
  handleSubmit: (values, { props: { fetchLogin }, setStatus, setSubmitting }) => {
    fetchLogin(values)
      .then(({ status, message }) => {
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false)
      })
  },
  displayName: 'LoginForm'
})(LoginForm);

export default connect(null, { fetchLogin })(LoginFormWithFormik);
