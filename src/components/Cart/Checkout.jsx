import React from 'react';
import classes from './Checkout.module.css';
import useInput from '../../hooks/input-validation-hook';

const Checkout = (props) => {

    const {
        value: nameInput,
        valid: nameInputValid,
        hasError: nameInputError,
        handleEnteredInput: handleNameInput,
        handleBlur: blurNameInput,
        resetInput: resetNameInput
    } = useInput((nameInput) => nameInput.trim() !== '');

    const {
        value: streetInput,
        valid: streetInputValid,
        hasError: streetInputError,
        handleEnteredInput: handleStreetInput,
        handleBlur: blurStreetInput,
        resetInput: resetStreetInput
    } = useInput((streetInput) => streetInput.trim() !== '');

    const {
        value: postalInput,
        valid: postalInputValid,
        hasError: postalInputError,
        handleEnteredInput: handlePostalInput,
        handleBlur: blurPostalInput,
        resetInput: resetPostalInput
    } = useInput((postalInput) => postalInput.trim() !== '');

    const {
        value: cityInput,
        valid: cityInputValid,
        hasError: cityInputError,
        handleEnteredInput: handleCityInput,
        handleBlur: blurCityInput,
        resetInput: resetCityInput
    } = useInput((postalInput) => postalInput.trim() !== '');

    const setErrorClasses = (inputError) => `${classes.control} ${ inputError ? classes.invalid : ''} `

    let formIsValid = false;

    if (nameInputValid && streetInputValid && postalInputValid && cityInputValid) {
        formIsValid = true;
    }

    const userData = {
        name: nameInput,
        addres: streetInput,
        postalCode: postalInput,
        city: cityInput
    }
    
    const confirmHandler = (event) => {
        event.preventDefault();

        //Send data

        props.onConfirm(userData);

        resetNameInput()
        resetStreetInput()
        resetPostalInput()
        resetCityInput()
    };


    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={setErrorClasses(nameInputError)}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    value={nameInput}
                    onChange={handleNameInput}
                    onBlur={blurNameInput}
                />
                {nameInputError && <p className={classes.errorText}>Please enter a name</p>}
            </div>
            <div className={setErrorClasses(streetInputError)}>
                <label htmlFor='street'>Street</label>
                <input
                    type='text'
                    id='street'
                    value={streetInput}
                    onChange={handleStreetInput}
                    onBlur={blurStreetInput}
                />
                {streetInputError && <p className={classes.errorText}>Please enter a adrees</p>}
            </div>
            <div className={setErrorClasses(postalInputError)}>
                <label htmlFor='postal'>Postal Code</label>
                <input
                    type='number'
                    id='postal'
                    value={postalInput}
                    onChange={handlePostalInput}
                    onBlur={blurPostalInput}
                />
                {postalInputError && <p className={classes.errorText}>Please enter a valid postal code</p>}
            </div>
            <div className={setErrorClasses(cityInputError)}>
                <label htmlFor='city'>City</label>
                <input
                    type='text'
                    id='city'
                    value={cityInput}
                    onChange={handleCityInput}
                    onBlur={blurCityInput}
                />
                {cityInputError && <p className={classes.errorText}>Please enter a city</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button
                    disabled={!formIsValid}
                    className={formIsValid ? classes.submit : classes.invalid}>
                    Confirm
                </button>
            </div>
        </form>
    );
};

export default Checkout;