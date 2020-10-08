import React from 'react';

import { CartItemContainer, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer className="cart-item">
      <img style={{ width: '30%' }} src={imageUrl} alt="item" />
      <ItemDetailsContainer className="item-details">
        <span style={{ fontSize: '16px' }}>{name}</span>
        <span>
          {quantity} x {price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
