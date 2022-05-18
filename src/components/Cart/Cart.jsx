import React, { useContext, useState } from 'react';
import classes from './Cart.module.css';
import Modal from '../Modal/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/CartContext';
import Checkout from './Checkout';

const Cart = props => {

    const [pushOrderBtn, setPushOrderBtn] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmited, setDidSubmitted] = useState(false);

    const cartCtx = useContext(CartContext);

    const hasItems = cartCtx.items.length > 0;

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const handleRemoveElement = (id) => {
        cartCtx.removeItem(id)
    }

    const handleAddElement = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })

    }

    const cartItems =
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


    const handlePushOrdenBtn = () => {
        setPushOrderBtn(prevValue => !prevValue);
    }

    const handleSendOrder = async (userData) => {
        setIsSubmitting(true)
        try {
            const response = await fetch('https://foodapp-2ff86-default-rtdb.firebaseio.com/orders.json', {
                method: 'POST',
                body: JSON.stringify({
                    user: userData,
                    orderedItems: cartCtx.items
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (!response.ok) {
                throw new Error(`Something went wrong, Error ${response.status}`)
            }
            const responseData = await response.json()
            console.log(responseData)
            setDidSubmitted(true)
            cartCtx.clearCart();
        } catch (error) {
            console.log(error.message)
        }
        setIsSubmitting(false)
    }

    const actionsButtons =
        <div className={classes.actions}>
            <button onClick={props.isShowed} className={['button--alt']}>Close</button>
            {hasItems && <button onClick={handlePushOrdenBtn} className={classes.button}>Order</button>}
        </div>

    const cartModalContent =
        <>
            {cartItems}
            <div className={classes.total}>
                <span>Total</span>
                <span>{totalAmount}</span>
            </div>
            {pushOrderBtn && <Checkout onConfirm={handleSendOrder} onCancel={props.isShowed} />}
            {!pushOrderBtn && actionsButtons}
        </>

    const isSubmittingModalContent = <p>Sending order data...</p>

    const didSubmittedModalContent = <p>Your order was succesfully sent!</p>

    return (

        <Modal setStateBackdrop={props.isShowed}>
            {!isSubmitting && !didSubmited && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmited && didSubmittedModalContent}
        </Modal>

    )
}

export default Cart;