export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItems = cartItems.find(item => 
        item.id === cartItemToAdd.id);

if(!!existingCartItems) {
    return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ?
     {...cartItem, quantity: cartItem.quantity + 1} 
     : cartItem);
}

return [...cartItems, {...cartItemToAdd, quantity: 1}];
}


export const clearCartItem = (cartItems, payload) => {
    return cartItems.filter(cartItem => cartItem.id !== payload.id)
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)
        console.log("asdfasdf", cartItemToRemove,)
    if(existingCartItem.quantity === 1) {
        console.log('clearCartItem(cartItems, existingCartItem);', clearCartItem(cartItems, existingCartItem) )
       return  clearCartItem(cartItems, existingCartItem);
    }

    
    return cartItems.map( cartItem => 
        cartItem.id === cartItemToRemove.id ? 
        {...cartItem, quantity: existingCartItem.quantity - 1}
        : cartItem
        )

}