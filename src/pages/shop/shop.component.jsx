import { connect } from 'react-redux';
import {selectShopCollections} from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collecton.component';
import { Route } from 'react-router-dom';

const  ShopPage = ({match}) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

    const mapStateToProps = createStructuredSelector({
        collections: selectShopCollections
    });

export default connect(mapStateToProps) (ShopPage);