import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items : [],
    totalAmount : 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const updateNewTotalAmount = state.totalAmount + action.item.price * action.item.totalAmount;
        return {
            items : updatedItems,
            totalAmount : updateNewTotalAmount
        };
    }
    else if(action.type === 'REMOVE'){

    }
    return defaultCartState;
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    
    const addItemToCartHandler = item => {
        dispatchCartAction({
            type : 'ADD',
            item : item
        });
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({
            type : 'REMOVE',
            // item : item
        });
    };

    const cartContexts = {
        items : cartState.items,
        totalAmount : cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem : removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContexts}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;