import { createContext, useReducer } from "react";
import reducer from "./../reducer/cartReducer";

export const CartContext = createContext(null);

const Cart = (props) => {
  const [cart, setCart] = useReducer(reducer, { cart: [] });

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Cart;
