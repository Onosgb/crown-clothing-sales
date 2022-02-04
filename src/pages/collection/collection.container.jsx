import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import WithSpinner from '../../components/with-spinner/with-spinner';
import {selectIsCollectionsLoaded, selectCollection} from '../../redux/shop/shop.selector';
import CollectionPage from './collecton.component'
import {compose} from 'redux';

const mapStateToProps = createStructuredSelector({
isLoading: state => !selectIsCollectionsLoaded(state),
collection: (state, ownProps) => selectCollection(ownProps.match.params.collectionId)(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;