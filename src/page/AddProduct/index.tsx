import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./AddProduct.module.scss";
import { createProduct } from "../../api/api";
import { AppDispatch, RootState } from "../../store/store";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { NewProduct } from "../../Types/types";

const AddProduct = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch: AppDispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  console.log(user);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (user !== null) {
      const newProduct: NewProduct = {
        name,
        price,
        image,
        user,
        client: [],
      };
      dispatch(createProduct(newProduct));
    }

  }

  return (
    <>
      <Header />
      <div className={styles.root}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            style={{ border: "1px solid black", color: "white" }}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Названия"
          />
          <input
            style={{ border: "1px solid black", color: "white" }}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="Цена"
          />
          <input
            style={{ border: "1px solid black", color: "white" }}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            placeholder="URL картины"
          />
          <button type="submit">Добавит</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddProduct;
