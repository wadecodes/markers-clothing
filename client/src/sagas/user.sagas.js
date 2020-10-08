import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
  CHECK_USER_SESSION,
  EMAIL_SIGNIN_START,
  GOOGLE_SIGNIN_START,
  SIGNOUT_START,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from '../actions/types/user.types';

import {
  signInFailure,
  signInSuccess,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from '../actions/user.actions';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../firebase/firebase.utils';

function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (err) {
    yield put(signInFailure(err));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGNIN_START, signInWithGoogle);
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGNIN_START, signInWithEmail);
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

function* signOutUser() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onUserSignOut() {
  yield takeLatest(SIGNOUT_START, signOutUser);
}

export function* signUpUser({ payload: { email, displayName, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield createUserProfileDocument(user, { displayName });
    yield put(signUpSuccess({ email, password }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onUserSignUp() {
  yield takeLatest(SIGNUP_START, signUpUser);
}

export function* onSignUpSuccess() {
  yield takeLatest(SIGNUP_SUCCESS, signInWithEmail);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onUserSignOut),
    call(onUserSignUp),
    call(onSignUpSuccess),
  ]);
}
