import React, { useRef,  useState} from "react";
import classes from './MealItemForm.module.css';
import Input from "../UI/Input/Input";



const MealItemForm = props => {

    const amountInputRef = useRef();

    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitForm = (e) =>{
        e.preventDefault();

        const enteredAmount = amountInputRef.current.value;

        const enteredAmountNumber = +enteredAmount;

        if ( enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5 ){
            setAmountIsValid(false)
            return;
        }

        props.onAddToCart(enteredAmountNumber);
        
    } 

    return (
        <form onSubmit={submitForm} className={classes.form} action="">
            <Input
                ref={amountInputRef}
                label= 'Amount'
                input={{
                    id: `Amount${props.inputId}`,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button className={classes.button}>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    )
}

export default MealItemForm;