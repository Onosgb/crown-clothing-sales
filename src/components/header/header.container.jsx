import { connect } from 'react-redux';
import { selectcurrentUser } from '../../redux/user/user.selector';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {signOutStart} from '../../redux/user/user.actions'
import { createStructuredSelector } from 'reselect';
import Header from './header.component';

const mapStateToProps = createStructuredSelector({
    currentUser: selectcurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;