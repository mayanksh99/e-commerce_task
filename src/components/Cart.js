import React, { useContext } from "react";
import { CartContext } from "./../context/cartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  console.log(cart);
  return (
    <div>
      {cart.cart.length > 0 ? (
        cart.cart.map((prod) => {
          return (
            <div key={prod.id} className="card">
              <div style={{ textAlign: "center" }}>
                <img src={prod.image} alt="product-img" width="140px" />
              </div>
              <div>
                <p>{prod.title}</p>
                <p>
                  <strong>Category :</strong> {prod.category}
                </p>
                <p>
                  <strong>Price :</strong> {prod.price}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <div> No item in cart</div>
      )}
    </div>
  );
};

export default Cart;
