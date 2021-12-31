import {connect} from 'react-redux';

import { createStructuredSelector } from 'reselect';
import WithSpinner from '../../components/with-spinner/with-spinner';
import {selectCollectionIsFetching} from '../../redux/shop/shop.selector';
import CollectionPage from './collecton.component'
import {compose} from 'redux';

const mapStateToProps = createStructuredSelector({
isLoading:  selectCollectionIsFetching
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;