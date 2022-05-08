import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [cartState, setCartState] = useState({
        items: [],
        totalAmount: 0,
    });

    // addToCartHandler
    const additemToCartHandler = (item) => {
        const updatedTotalAmount =
            cartState.totalAmount + item.price * item.amount;
        const cartItems = cartState.items;

        const existingCartItemIndex = cartItems.findIndex(
            (itm) => itm.id === item.id
        );
        const existingCartItem = cartItems[existingCartItemIndex];
        let updatedItem;
        let updatedItems;

        if (existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                amount: +existingCartItem.amount + +item.amount,
            };
            updatedItems = [...cartItems];
            updatedItems[existingCartItemIndex] = updatedItem;
            setCartState({
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            });
        } else {
            setCartState({
                items: [...cartItems, item],
                totalAmount: updatedTotalAmount,
            });
        }
    };

    // removeFromCartHandler
    const removeitemFromCartHandler = (id) => {
        const cartItems = cartState.items;
        const existingCartItemIndex = cartItems.findIndex(
            (itm) => itm.id === id
        );
        const existingCartItem = cartItems[existingCartItemIndex];
        let updatedTotalAmount = cartState.totalAmount - existingCartItem.price;
        let updatedItem;
        let updatedItems;

        if (existingCartItem.amount > 1) {
            // existingCartItem.amount -= existingCartItem.amount;
            updatedItem = {
                ...existingCartItem,
                amount: +existingCartItem.amount - 1,
            };
            updatedItems = [...cartItems];
            updatedItems[existingCartItemIndex] = updatedItem;
            setCartState({
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            });
        } else {
            const itemRemoved = cartItems.filter((item) => item.id !== id);
            setCartState({
                items: itemRemoved,
                totalAmount: updatedTotalAmount,
            });
        }
    };

    // cartContext
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: additemToCartHandler,
        removeItem: removeitemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
