import React from 'react';
import { Route } from "react-router-dom";

import { LoginForm, RegisterForm, VerifyEmail } from 'modules';

import './auth.scss';

const Auth = () => {
  return (
    <section className="auth">
      <Route exact path="/signin" component={LoginForm}/>
      <Route exact path="/signup" component={RegisterForm}/>
      <Route exact path="/signup/verify" component={VerifyEmail}/>
    </section>
  );
};

export default Auth;
