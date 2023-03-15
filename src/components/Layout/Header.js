import React, { Fragment } from "react";

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>
                    React Meals
                </h1>
                <HeaderCartButton onClick={props.onShowCart}/> 
                {/* we are using the pointer here as onClick */}
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='full of food'/>
            </div>
        </Fragment>
    );
};

export default Header;