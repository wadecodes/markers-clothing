import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../selectors/shop.selector';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {
  CollectionItemsContainer,
  CollectionPageContainer,
  CollectionTitle,
} from './collection.styles.jsx';

const Collection = ({ match: { params }, collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
