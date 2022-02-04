import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import {Route, Switch, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import HeaderContainer from './components/header/header.container';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import CheckoutPageContainer from './pages/checkout/checkout.container';
import CollectionPageContainer from './pages/collection/collection.container';

class App extends React.Component {
  unsubcribeAuth = null;
  componentDidMount() {
    const {checkUserSession} = this.props;
    checkUserSession()
  }

  compoponentWillMount() {
    this.unsubcribeAuth();
  }


 render() {
   const {currentUser} = this.props;
  return (
    <div >
      <HeaderContainer/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPageContainer} />
          <Route  exact path="/shop/:collectionId" component={CollectionPageContainer} />
          <Route exact path="/signin" 
            render={() => currentUser ?
             (<Redirect to='/'/>) :
              (<SignInAndSignUpPage/>)} />
      </Switch>
    </div>
  );
 }
}


export default App;
