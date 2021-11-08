import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const Product = () => {
  const { id } = useParams();

  const [detail, setDetail] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setDetail(json));
  }, [id]);

  return (
    <div>
      {detail && (
        <div style={{ textAlign: "center" }}>
          <img src={detail.image} alt="prod-img" width="140px" />
          <p>
            <strong>Title:</strong> {detail.title}
          </p>
          <p>
            <strong>Category:</strong> {detail.category}
          </p>
          <p>
            <strong>Price:</strong> {detail.price}
          </p>
        </div>
      )}
    </div>
  );
};

export default Product;
