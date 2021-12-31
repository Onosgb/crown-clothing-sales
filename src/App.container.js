import {connect} from 'react-redux';
import {selectcurrentUser} from './redux/user/user.selector'
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from './redux/shop/shop.selector';
import App from './App'


const mapStateToProps = createStructuredSelector({
    currentUser: selectcurrentUser,
    collections: selectCollectionsForPreview
  })

  const AppContainer = connect(mapStateToProps)(App);

  export default AppContainer;