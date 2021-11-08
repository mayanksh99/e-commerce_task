import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({
          title,
          price,
          description: desc,
          image: imgURL,
          category,
        }),
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
      window.alert("Product added");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <p>Add Product</p>
      </div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <p>Title</p>
          <input
            placeholder="Enter title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <p>Price</p>
          <input
            placeholder="Enter Price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <p>Description</p>
          <textarea
            placeholder="Enter description"
            name="decription"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <p>Image URL</p>
          <input
            placeholder="Enter url"
            name="img"
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
          />
          <p>Category</p>
          <input
            placeholder="Enter category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
