import React from 'react';
import {Route} from "react-router-dom";

import {LoginForm, RegisterForm} from 'modules';

import './auth.scss';

const Auth = () => {
  return (
    <section className="auth">
      <Route exact path="/signin" component={LoginForm} />
      <Route exact path="/signup" component={RegisterForm} />
    </section>
  );
};

export default Auth;
