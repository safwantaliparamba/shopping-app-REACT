import React, { useContext } from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const onAdd = (item) => {
        cartCtx.addItem({...item,amount:1})
    };
    const onRemove = (id) => {
        cartCtx.removeItem(id)
    };

    const cartIems = (
        <ul className={classes["cart-items"]}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    amount={item.amount}
                    price={item.price}
                    onAdd={onAdd.bind(null,item)}
                    onRemove={onRemove.bind(null,item.id)}
                />
            ))}
        </ul>
    );
    const cartTotal = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    return (
        <Modal onClick={props.onClick}>
            {cartIems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{cartTotal}</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes["button--alt"]}
                    onClick={() => props.onClick()}
                >
                    Close
                </button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
