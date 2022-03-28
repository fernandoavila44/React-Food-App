import {useContext} from 'react';
import classes from './Cart.module.css';
import Modal from '../Modal/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/CartContext';

const Cart = props => {
    
    const cartCtx = useContext(CartContext);

    const hasItems = cartCtx.items.length > 0;

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const handleRemoveElement = (id) =>{
        cartCtx.removeItem(id)
    }

    const handleAddElement = (item) =>{
        cartCtx.addItem({...item, amount : 1})

    }

    return(

        <Modal setStateBackdrop={props.isShowed}>
            <ul className={classes['cart-items']}>
                {cartCtx.items.map((cItem, index) => 
                    <CartItem 
                        key={index}
                        name={cItem.name}
                        amount={cItem.amount}
                        price={cItem.price}
                        onRemove={handleRemoveElement.bind(null, cItem.id)}
                        onAdd={handleAddElement.bind(null, cItem)}
                    /> 
                )}
            </ul>

            <div className={classes.total}>
                <span>Total</span>
                <span>{totalAmount}</span>
            </div>

            <div className={classes.actions}>
                <button onClick={props.isShowed} className={['button--alt']}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>

    )
}

export default Cart;