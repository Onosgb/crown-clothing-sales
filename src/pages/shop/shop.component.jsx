import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCollectionStartAsync} from '../../redux/shop/shop.actions'
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview-container'
import CollectionContainer from '../collection/collection.container';
import { Route } from 'react-router-dom';

class ShopPage extends Component {
       
    componentDidMount() {
        const {fetchCollectionStartAsync} = this.props;
        fetchCollectionStartAsync();
    }
    
   render() {
   const  {match} = this.props;
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
            <Route exact path={`${match.path}/:collectionId`} component={CollectionContainer}/>
        </div>
    );
   }
}
    const mapDispatchToProps = dispatch =>({
        fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
    })


export default connect(null, mapDispatchToProps) (ShopPage);