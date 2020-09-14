import React, { Component } from 'react';

import SignIn from '../../components/sign-in/sign-in.component';


import './authpage.styles.scss';

export class AuthPage extends Component {
  render() {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}

export default AuthPage;
