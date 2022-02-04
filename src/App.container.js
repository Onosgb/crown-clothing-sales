import {connect} from 'react-redux';
import {selectcurrentUser} from './redux/user/user.selector'
import {createStructuredSelector} from 'reselect';
import App from './App'
import {checkUserSession} from './redux/user/user.actions';

const mapStateToProps = createStructuredSelector({
    currentUser: selectcurrentUser
  })

  const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
  })
  
  
  const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

  export default AppContainer;