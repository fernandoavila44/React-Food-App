import React, {useContext} from 'react';
import classes from './MealsItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../store/CartContext';

const MealsItem = (props) => {

    const price = `$${props.price.toFixed(2)}`

    const cartCtx = useContext(CartContext)

    const  addToCardHandler = amount =>{
        cartCtx.addItem({
            id:props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.desc}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm inputId={props.inputId} onAddToCart={addToCardHandler} />
            </div>
        </li>
    )
}

export default MealsItem;