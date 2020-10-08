import {
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAILURE,
} from '../actions/types/user.types';

const initialState = { currentUser: null, error: null };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNIN_SUCCESS:
      return { ...state, currentUser: payload, error: null };

    case SIGNIN_FAILURE:
    case SIGNOUT_FAILURE:
      return { ...state, error: payload };

    case SIGNOUT_SUCCESS:
      return { ...state, currentUser: null, error: null };

    default:
      return state;
  }
};
