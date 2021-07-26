import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import css from "./products.module.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  // const [users, setUsers] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    let tempproducts = products;
    tempproducts.push({ name, description, price, stock });
    setProducts(tempproducts);
    localStorage.setItem("products", JSON.stringify(products));

    setName("");
    setDescription("");
    setPrice(0);
    setStock(0);
    window.alert("Product registered successfully!");
  };

  const inputChange = (e) => {
    console.log(e);

    if (e.target.name === "Name") setName(e.target.value);
    else if (e.target.name === "Description") setDescription(e.target.value);
    else if (e.target.name === "Price") setPrice(e.target.value);
    else if (e.target.name === "Stock") setStock(e.target.value);
  };

  useEffect(() => {
    const productList = JSON.parse(localStorage.getItem("products"));
    setProducts(productList);
  }, []);

  return (
    <>
      <Header />
      <main className={`${css.flexBox} ${css.mainDiv}`}>
        <section className={css.container}>
          <form action="" className={css.form} onSubmit={formSubmit}>
            <span className={css.spanTitle}>Register New User</span>
            <br />
            <label htmlFor="inputName">Name:</label>
            <input
              name="Name"
              className={css.input}
              id="inputName"
              type="text"
              required
              placeholder="Name"
              onChange={inputChange}
              value={name}
            />
            <label htmlFor="inputDescription">Description:</label>
            <input
              className={css.input}
              name="Description"
              id="inputDescription"
              type="textbox"
              required
              placeholder="Product Description"
              onChange={inputChange}
              value={description}
            />
            <label htmlFor="inputPrice">Price:</label>
            <input
              className={css.input}
              name="Price"
              id="inputPrice"
              type="number"
              required
              placeholder="1234.5"
              onChange={inputChange}
              value={price}
              min="0"
            />
            <label htmlFor="inputStock">On Stock:</label>
            <input
              className={css.input}
              name="Stock"
              id="inputStock"
              type="number"
              required
              // placeholder="On Stock"
              onChange={inputChange}
              value={stock}
              min="0"
            />
            <button>Register</button>
          </form>
        </section>
        <section className={`${css.container} ${css.cardsDisplay}`}>
          <span className={css.spanTitle}>Product List:</span>
          {products.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}

          <br />
          <a href="/">Back to Home</a>
        </section>
      </main>

      <Footer />
    </>
  );
}
