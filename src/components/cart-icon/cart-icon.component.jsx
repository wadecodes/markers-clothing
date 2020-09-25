import React from 'react';

import { connect } from 'react-redux';
import { toggleCart } from '../../actions';
import { selectCartItemsCount } from '../../reducers/cart/cart.selector';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = (props) => {
  const { toggleCart, itemCount } = props;
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = {
  toggleCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
