import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Collection from '../collection/collection.component';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { connect } from 'react-redux';
import { updateCollections } from '../../actions';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);

class ShopPage extends Component {
  state = { isLoading: true };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    fetch(
      'https://firestore.googleapis.com/v1/projects/markers-clothing/databases/(default)/documents/collections'
    )
      .then((response) => response.json())
      .then((collections) => console.log(collections))
      .catch((err) => console.log(err));

    // collectionRef.get().then((snapshot) => {
    //   const collectionMap = convertCollectionsSnapshotToMap(snapshot);
    //   this.props.updateCollections(collectionMap);
    //   this.setState({ isLoading: false });
    // });
  }

  componentWillUnmount() {
    // this.unsubscribeFromSnapshot();
  }

  render() {
    const { isLoading } = this.state;
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateCollections,
};

export default connect(null, mapDispatchToProps)(ShopPage);
