import React from 'react';

import { connect } from 'react-redux';

import { selectCartItems } from '../../selectors/cart.selector';

import CartItem from '../cart-item/cart-item.componenets';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(Cart);
