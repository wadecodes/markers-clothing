import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  CollectionPreviewDiv,
  CollectionPreviewTitle,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
      <CollectionPreviewDiv>
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </CollectionPreviewDiv>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
