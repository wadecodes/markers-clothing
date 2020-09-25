import { SET_CURRENT_USER, TOGGLE_CART } from './types';

export const setCurrentUser = (userAuth) => {
  return {
    type: SET_CURRENT_USER,
    payload: userAuth,
  };
};

export const toggleCart = () => {
  return {
    type: TOGGLE_CART,
  };
};
