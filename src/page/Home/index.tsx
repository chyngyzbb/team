import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, Product } from "../../api/api";
import { AppDispatch, RootState } from "../../store/store";
import styles from "./Home.module.scss";
import ProductCard from "../../components/ProductCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search.search);
  const { error, loading, products } = useSelector(
    (state: RootState) => state.product
  );

  const res =
    products.length > 1
      ? products.filter((el) =>
          el.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];
  console.log(search);
  console.log(res);
  console.log(products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  if (loading) return <p>Жүктөлүүдө...</p>;
  if (error) return <p>Ката: {error}</p>;

  return (
    <>
      <Header />
      <div className="container">
        <h3>Общие карточки: {res.length}шт</h3>
        <div className={styles.root}>
          {products && products.length > 0 ? (
            res.map((el: Product, idx: number) => (
              <ProductCard el={el} idx={idx} key={idx} />
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
