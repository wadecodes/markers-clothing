import { SET_CURRENT_USER } from './types';

export const setCurrentUser = (userAuth) => {
  return {
    type: SET_CURRENT_USER,
    payload: userAuth,
  };
};
