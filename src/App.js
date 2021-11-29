import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import CheckoutPage from './pages/checkout/checkout.component';
import CollectionPage from './pages/collection/collecton.component';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import {selectcurrentUser} from './redux/user/user.selector'
import {createStructuredSelector} from 'reselect';
class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if the user is authorized to access set the state 
      if(userAuth) {
    const {userSnap, id} = await createUserProfileDocument(userAuth);
      if(userSnap.exists()) {
        setCurrentUser({
            id,
            ...userSnap.data()
          }
        );
        return;
      } 

      // set the user to null if the user does not exist
      setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

 render() {
  return (
    <div >
      <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route  exact path="/shop/:collectionId" component={CollectionPage} />
          <Route exact path="/signin" 
            render={() => this.props.currentUser ?
             (<Redirect to='/'/>) :
              (<SignInAndSignUpPage/>)} />
      </Switch>
    </div>
  );
 }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectcurrentUser
})

const mapDispatchToProps = dispatch => ({
setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps) (App);
