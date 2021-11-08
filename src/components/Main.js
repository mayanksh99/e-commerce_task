import React, { useEffect, useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const Main = () => {
  const [product, setProduct] = useState([]);
  const [totalPage, setTotalPage] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const navigate = useNavigate();
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProduct(json);
        setTotalPage(new Array(json.length / 5).fill(0));
      });
  }, []);

  //   console.log(cart);

  return (
    <div style={{ marginTop: 20 }}>
      <div style={{ marginBottom: 10 }}>
        <button onClick={() => navigate("/add")}>Add Product</button>
      </div>
      <div style={{ marginBottom: 10 }}>
        <button onClick={() => navigate("/cart")}>Go to cart</button>
      </div>
      <div className="card-container">
        {product &&
          product.slice(activePage, activePage + 5).map((prod) => {
            return (
              <div
                key={prod.id}
                className="card"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/product/${prod.id}`);
                }}
              >
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
                <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCart({ type: "ADD", data: prod });
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        <div></div>
      </div>
      <div className="pagination">
        {totalPage &&
          totalPage.map((data, id) => (
            <div
              key={id}
              className="pagi-card"
              onClick={() => setActivePage(--id * 5)}
            >
              {++id}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Main;
