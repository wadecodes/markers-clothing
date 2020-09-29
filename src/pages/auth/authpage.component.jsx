import React, { Component } from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import Signup from '../../components/sign-up/sign-up.components';

import {AuthContainer} from './authpage.styles.jsx';

export class AuthPage extends Component {
  render() {
    return (
      <AuthContainer>
        <SignIn />
        <Signup />
      </AuthContainer>
    );
  }
}

export default AuthPage;
