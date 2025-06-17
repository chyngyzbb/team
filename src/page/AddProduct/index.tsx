import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./AddProduct.module.scss";
import { createProduct } from "../../api/api";
import { RootState } from "../../store/store";

const AddProduct = () => {

  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();

  console.log(user);
  
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newProduct = {
      name,
      price,
      image,
      user
    };
    console.log(newProduct);

    dispatch(createProduct(newProduct));
  }

  return (
    <div className={styles.root}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
        style={{border:'1px solid black', color:'white'}}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Названия"
        />
        <input
        style={{border:'1px solid black', color:'white'}}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          placeholder="Цена"
        />
        <input
        style={{border:'1px solid black', color:'white'}}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          placeholder="URL картины"
        />
        <button type="submit">Добавит</button>
      </form>
    </div>
  );
};

export default AddProduct;
