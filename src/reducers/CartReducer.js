import {TOGGLE_CART} from '../actions/types';

const initialState = {
  isVisible: false,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_CART:
      return { ...state, isVisible: !state.isVisible };

    default:
      return state;
  }
};
