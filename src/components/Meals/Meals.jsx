import React from 'react';
import AvailablesMeals from './AvialablesMeals';
import MealsSummary from './MealsSummary';

const Meals = (props) => {
    return(
        <>
            <MealsSummary />
            <AvailablesMeals />
        </>
    )
}

export default Meals;