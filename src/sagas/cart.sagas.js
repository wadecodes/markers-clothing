import { all, call, put, takeLatest } from 'redux-saga/effects';

import { SIGNOUT_SUCCESS } from '../actions/types/user.types';
import { clearCart } from '../actions/cart.actions';

function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(SIGNOUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
