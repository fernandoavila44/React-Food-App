import classes from './AvailablesMeals.module.css';
import MealsItem from './MealsItem';
import Card from '../UI/Card/Card';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailablesMeals = () => {
    return (
        <section className={classes.meals}>
        <Card>
            <ul>
                {DUMMY_MEALS.map((meal, index) =>

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
        </Card>

        </section>
    )

}

export default AvailablesMeals;