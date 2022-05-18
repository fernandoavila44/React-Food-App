import React, { useEffect, useState } from 'react';
import classes from './AvailablesMeals.module.css';
import MealsItem from './MealsItem';
import Card from '../UI/Card/Card';

const AvailablesMeals = () => {

    const [mealsFectched, setMealsFetched] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setError] = useState(null)

  

    useEffect(() => {
        const fetchMealsFromDB = async () => {
         
            const response = await fetch('https://foodapp-2ff86-default-rtdb.firebaseio.com/meals.json')
    
            if (!response.ok) {
                throw new Error(`Something went wrong, Error ${response.status}`)
            }
    
            const data = await response.json()
    
            setMealsFetched(data)
            setIsLoading(false)
    
        }

        fetchMealsFromDB() 
            .catch((error) => {
                setIsLoading(false)
                setError(error.message) 
            })
    }, []);

    const display = 
        isLoading ? <p>Fetching data...</p>
        : hasError ?  <p>{hasError}</p>
        : <ul>
            {mealsFectched.map((meal, index) =>
                <MealsItem
                    key={index}
                    id={meal.id}
                    name={meal.name}
                    desc={meal.description}
                    price={meal.price}
                    inputId={index}
                />
            )}
        </ul>

    return (
        <section className={classes.meals}>
            <Card>
                {display}
            </Card>
        </section>
    )

}

export default AvailablesMeals;