import React from "react";
import HeaderCardButton from "./HeaderCardButton";
import classes from './Header.module.css'
import mealsImg from '../../../assets/meals.jpg'


const Header = props => {
    return(
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCardButton isPressed={props.isPressed} />
            </header>
            <div className={classes['main-image']}>
                <img  src={mealsImg} alt='meals header img'/>
            </div>
        </>
    )
}

export default Header;