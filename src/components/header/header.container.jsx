import { connect } from 'react-redux';
import { selectcurrentUser } from '../../redux/user/user.selector';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import Header from './header.component';

const mapStateToProps = createStructuredSelector({
    currentUser: selectcurrentUser,
    hidden: selectCartHidden
});

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;