import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

function MealItem(props) {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;
    const amountInputHandler = (amount) => {
      cartCtx.addItem({
        id:props.id,
        name:props.name,
        price:props.price,
        amount:amount,
        description:props.description,
      })
    };
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm amountHandler={amountInputHandler} />
            </div>
        </li>
    );
}

export default MealItem;
