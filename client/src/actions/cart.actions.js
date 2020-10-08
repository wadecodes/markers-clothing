import {
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  TOGGLE_CART,CLEAR_CART
} from './types/cart.types';

//* CART ACTIONS

export const toggleCart = () => {
  return {
    type: TOGGLE_CART,
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const clearItemFromCart = (item) => {
  return {
    type: CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART
  }
}