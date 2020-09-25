import { TOGGLE_CART, ADD_ITEM } from '../actions/types';
import { addItemToCart } from './cart/cart.utils';

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

    default:
      return state;
  }
};
