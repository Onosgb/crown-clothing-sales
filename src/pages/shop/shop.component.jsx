import React, {Component} from 'react';
import {connect} from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner';
import {selectShopCollections} from '../../redux/shop/shop.selector';
import {updateCollectons} from '../../redux/shop/shop.actions'
import { createStructuredSelector } from 'reselect';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collecton.component';
import { Route } from 'react-router-dom';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {
        state = {
            loading: true
        }

     unsubcribeSnapshot = null;

     componentDidMount() {
         const {updateCollectons} = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
                const collectionMap =    convertCollectionSnapshotToMap(snapshot);
                updateCollectons(collectionMap);
                this.setState({loading: false});
            }
        )
     }

   render() {
   const  {match} = this.props;
   const {loading} = this.state;
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={props =>< CollectionOverviewWithSpinner isloading={loading} {...props} />} />
            <Route exact path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isloading={loading} {...props}  />} />
        </div>
    );
   }
}
    const mapDispatchToProps = dispatch =>({
        updateCollectons: collectionsMap => dispatch(updateCollectons(collectionsMap)),
    })
    const mapStateToProps = createStructuredSelector({
        collections: selectShopCollections
    });

export default connect(mapStateToProps, mapDispatchToProps) (ShopPage);