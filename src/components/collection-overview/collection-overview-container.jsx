import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCollectionIsFetching} from '../../redux/shop/shop.selector';
import CollectionOverview from './collection-overview.component';
import WithSpinner from '../with-spinner/with-spinner';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionIsFetching
});
const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
    )(CollectionOverview);

export default CollectionOverviewContainer;