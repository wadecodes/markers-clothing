import React, { Component } from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import Signup from '../../components/sign-up/sign-up.components';

import './authpage.styles.scss';

export class AuthPage extends Component {
  render() {
    return (
      <div className="auth">
        <SignIn />
        <Signup />
      </div>
    );
  }
}

export default AuthPage;
