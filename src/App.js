import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/cartProvider";

// We can use useState in app.js for changing pages while using multiple components
function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} /> 
      {/* Very imp line, creating a pointer for calling a handler, check header Component defination */}
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
