import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../selectors/cart.selector';
import { toggleCart } from '../../actions';

import CartItem from '../cart-item/cart-item.componenets';
import CustomButton from '../custom-button/custom-button.component';

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from './cart-dropdown.styles';

const Cart = ({ cartItems, history, toggleCart }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <CustomButton
        style={{ marginTop: 'auto' }}
        onClick={() => {
          toggleCart();
          history.push('/checkout');
        }}
      >
        GO TO CART
      </CustomButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps, { toggleCart })(Cart));
