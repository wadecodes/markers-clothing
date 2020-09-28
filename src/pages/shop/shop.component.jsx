import React from 'react';
import { Route } from 'react-router-dom';

import Collection from '../collection/collection.component';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route exact path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default ShopPage;
