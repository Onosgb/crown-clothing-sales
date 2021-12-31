
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartTotal, selectCartItems} from '../../redux/cart/cart.selectors'
import CheckoutPage from '../../pages/checkout/checkout.component';

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

const CheckoutPageContainer = connect(mapStateToProps)(CheckoutPage);

export default CheckoutPageContainer