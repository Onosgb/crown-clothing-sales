import './header.styles.scss';
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'
import CardDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectcurrentUser } from '../../redux/user/user.selector';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link  className="logo-container" to="/">
        <Logo className="logo"/>
        </Link>

        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>

            {
                currentUser ? <div className="option" onClick={ () => auth.signOut()}>Sign Out</div>
                :
            <Link className="option" to="/signin">
                SIGNIN
            </Link>
            }
           <CartIcon />
        </div>
       {
           hidden ? null:  <CardDropdown />
       }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectcurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps) (Header);