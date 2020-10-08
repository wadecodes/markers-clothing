import React from 'react';
import { connect } from 'react-redux';
import { addItem, clearItemFromCart, removeItem } from '../../actions/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  RemoveButtonContainer,
  TextContainer,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, addItem, clearItemFromCart, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="product" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = {
  addItem,
  clearItemFromCart,
  removeItem,
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
