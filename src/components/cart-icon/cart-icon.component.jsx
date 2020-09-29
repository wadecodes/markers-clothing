import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCart } from '../../actions';
import { selectCartItemsCount } from '../../selectors/cart.selector';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = (props) => {
  const { toggleCart, itemCount } = props;
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon style={{ width: '24px', height: '24px' }} />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = {
  toggleCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
