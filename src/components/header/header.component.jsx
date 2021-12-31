import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdownContainer from '../cart-dropdown/cart-dropdown.container';
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
           hidden ? null:  <CartDropdownContainer />
       }
   </HeaderContainer>
)


export default Header;