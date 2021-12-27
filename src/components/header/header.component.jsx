import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'
import CardDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectcurrentUser } from '../../redux/user/user.selector';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';
const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
        <Logo className="logo"/>
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/contact">
                CONTACT
            </OptionLink>

            {
                currentUser ? <OptionLink as="div"  onClick={ () => auth.signOut()}>Sign Out</OptionLink>
                :
            <OptionLink to="/signin">
                SIGNIN
            </OptionLink>
            }
           <CartIcon />
        </OptionsContainer>
       {
           hidden ? null:  <CardDropdown />
       }
   </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectcurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps) (Header);