import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../actions/user.actions';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  ButtonsBarContainer,
  SignInContainer,
  SignInTitle,
} from './sign-in.styles.jsx';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          name="email"
          type="email"
          value={email}
          required
          label="Email"
        />
        <FormInput
          handleChange={handleChange}
          name="password"
          type="password"
          value={password}
          label="Password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={googleSignInStart}
          >
            Sign In with google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = { googleSignInStart, emailSignInStart };

export default connect(null, mapDispatchToProps)(SignIn);
