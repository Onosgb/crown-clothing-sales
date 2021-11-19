import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if the user is authorized to access set the state 
      if(userAuth) {
    const {userSnap, id} = await createUserProfileDocument(userAuth);
      if(userSnap.exists()) {
        this.setState({currentUser: {...userSnap.data(), id}});
        return;
      } 

      // set the user to null if the user does not exist
      this.setState({currentUser: userAuth});
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

 render() {
  return (
    <div >
      <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
 }
}

export default App;
