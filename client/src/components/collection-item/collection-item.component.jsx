import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../actions/cart.actions';

import {
  CollectionFooter,
  CollectionItemContainer,
  ImageContainer,
  AddToCartButton,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CollectionFooter className="collection-footer">
        <span id="name" className="name">
          {name}
        </span>
        <span id="price">{price}</span>
      </CollectionFooter>
      <AddToCartButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddToCartButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = { addItem };

export default connect(null, mapDispatchToProps)(CollectionItem);
