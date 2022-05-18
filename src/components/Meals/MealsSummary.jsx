import React from 'react';
import classes from './MealsSummary.module.css';

const MealsSummary = props => {
    return(
        <section className={classes.summary}>
            <h2>Delicious Food, Delivery To You</h2>
            <p>Choose your favorite meal from our brand selection of avilable meats and enjoy deliciuos lunch or dinner at home.</p>
            <p>All our meals are cocked with high-quality ingredientes, just-in-time and of course by experienced chefs! </p>
        </section>
    )
}   

export default MealsSummary;