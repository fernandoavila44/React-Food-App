import React, {useContext, useEffect, useState} from "react";
import CartContext from "../../../store/CartContext";
import CartIcon from "../../Cart/CartIcon";
import classes from './HeaderCardButton.module.css';

const HeaderCardButton = (props) => {

    const cartCtx = useContext(CartContext);

    const [btnHigh, setBtnHigh] = useState(false);

    const { items } = cartCtx;

    const ammountOfItemsCart = items.reduce((prevValue, item) =>{
        return prevValue + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnHigh ? classes.bump : ''}`;

    useEffect(() =>{
        if(items.length === 0){
            return;
        }
        setBtnHigh(true);
        const timer = setTimeout(() => {
            setBtnHigh(false);
        }, 300);

        return () =>{
            clearTimeout(timer);
        };
    }, [items])
    
    return (
        <>
            <button className={btnClasses} onClick={props.isPressed}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>{ammountOfItemsCart}</span>
            </button>
        </>
    )
}

export default HeaderCardButton