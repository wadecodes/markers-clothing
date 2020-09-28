import {
  TOGGLE_CART,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
} from '../actions/types';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from './utils/cart.utils';

const initialState = {
  isVisible: false,
  cartItems: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART:
      return { ...state, isVisible: !state.isVisible };

    case ADD_ITEM:
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) };

    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, payload),
      };

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };

    default:
      return state;
  }
};
