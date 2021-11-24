export const addItemToCart = (cartItems, cartItemToAdd) => {
    console.log('previous items', cartItems);
    const existingCartItems = cartItems.find(item => 
        item.id === cartItemToAdd.id);

if(!!existingCartItems) {
    return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ?
     {...cartItem, quantity: cartItem.quantity + 1} 
     : cartItem);
}

return [...cartItems, {...cartItemToAdd, quantity: 1}];
}