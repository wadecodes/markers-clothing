import {
  EMAIL_SIGNIN_START,
  GOOGLE_SIGNIN_START,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  CHECK_USER_SESSION,
  SIGNOUT_START,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAILURE,
  SIGNUP_START,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from './types/user.types';

//* USER ACTIONS

export const googleSignInStart = () => {
  return {
    type: GOOGLE_SIGNIN_START,
  };
};

export const emailSignInStart = (email, password) => {
  return {
    type: EMAIL_SIGNIN_START,
    payload: { email, password },
  };
};

export const signInSuccess = (user) => {
  return {
    type: SIGNIN_SUCCESS,
    payload: user,
  };
};

export const signInFailure = (error) => {
  return {
    type: SIGNIN_FAILURE,
    payload: error,
  };
};

export const checkUserSession = () => {
  return {
    type: CHECK_USER_SESSION,
  };
};

export const signOutStart = () => {
  return {
    type: SIGNOUT_START,
  };
};

export const signOutSuccess = () => {
  return {
    type: SIGNOUT_SUCCESS,
  };
};

export const signOutFailure = (error) => {
  return {
    type: SIGNOUT_FAILURE,
    payload: error,
  };
};

export const signUpStart = (userDetails) => {
  return {
    type: SIGNUP_START,
    payload: userDetails,
  };
};

export const signUpSuccess = (userDetails) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: userDetails,
  };
};
export const signUpFailure = (error) => {
  return {
    type: SIGNUP_FAILURE,
    payload: error,
  };
};
