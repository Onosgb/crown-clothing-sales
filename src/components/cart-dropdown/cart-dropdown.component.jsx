import React from 'react';
import {connect} from 'react-redux'
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {toggleCartHidden} from '../../redux/cart/cart.action'
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {CardDropdownContainer, EmptyMessageContainer, CartItems} from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <CardDropdownContainer>
        <CartItems >
            {
                cartItems.length ?
                (cartItems.map((cartItem) => {                
                return <CartItem key={cartItem.id} cartItem={cartItem}/>})) 
                :
                (<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>)
            }
        </CartItems>

        <CustomButton onClick={() => {history.push('/checkout'); dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButton>

    </CardDropdownContainer>
)

const matStateToProps = createStructuredSelector({
cartItems: selectCartItems
})

export default withRouter(connect(matStateToProps) (CartDropdown));