import React, { Fragment,useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from  './HeaderCartButton.module.css';
import CartContext from "../../store/cart-context";


const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItem = cartCtx.items.length;
    return (
        <Fragment>

            <button className={classes.button} onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon/>
                </span>
                <span> Your Card</span>
                <span className={classes.badge}>
                    3
                </span>  
            </button>
        </Fragment>
    );
};

export default HeaderCartButton;