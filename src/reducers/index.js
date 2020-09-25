import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
// import HomeReducer from './HomeReducer';
// import ShopReducer from './ShopReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  user: UserReducer,
  cart: CartReducer
});
