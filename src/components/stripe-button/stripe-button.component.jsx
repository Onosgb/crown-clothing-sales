import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}
const StripeCheckoutButton =({price}) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51K1PvEA5a4JegTaoPh9EaRv7tL4NKHck6R76dhuuQjB1eZ7fBjEZAqv5VWQu0bqIfV91hduvGtypJoUwkxRVI27v00QOXdvouu'


        return (
            <StripeCheckout
            label='PAY NOW'
            name='CRWN Clothing Ltd'
            billingAddress
            shipAddress
            image='../../assets/crown.svg'
            description ={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
            />
        )
}

export default StripeCheckoutButton;