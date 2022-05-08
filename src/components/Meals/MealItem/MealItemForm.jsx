import React, { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const amountRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        props.amountHandler(amountRef.current.value)
    }
    return (
        <div>
            <form className={classes.form} onSubmit={submitHandler}>
                <Input
                    ref={amountRef}
                    label="Add"
                    input={{
                        id: "amount_" + props.id,
                        type: "number",
                        min: "1",
                        max: "5",
                        step: "1",
                        defaultValue: "1",
                    }}
                />
                <button type="submit">+ Add</button>
            </form>
        </div>
    );
};

export default MealItemForm;
