import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../api/api";
import { RootState } from "../../store/store";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./Home.module.scss";
import Stack from "@mui/material/Stack";
import ProductCard from "../../components/ProductCard";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const search =useSelector((state)=>state.search.search)
  const { error, loading, products } = useSelector(
    (state: RootState) => state.product
  );

  const res = products.length>1?products.filter((el) => (el.name.toLowerCase().includes(search.toLowerCase()))):''
  console.log(search);
  console.log(res);
  console.log(products);

  // const products= useSelector(
  //   (state: RootState) => state.product.products.data
  // );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // console.log("HomeProduct:", products);
  // console.log(fetchProducts());

  if (loading) return <p>Жүктөлүүдө...</p>;
  if (error) return <p>Ката: {error}</p>;

  return (
    <div className="container">
      <h3>Общие карточки: {res.length}шт</h3>
      <div className={styles.root}>
        {products && products.length > 0 ? (
          res.map((el, idx) => (
            <ProductCard el={el} key={idx} />
            // <Card key={idx} sx={{ maxWidth: 305 }}>
            //   <CardMedia
            //     sx={{ height: 140 }}
            //     image={el.image}
            //     title="green iguana"
            //   />
            //   <CardContent>
            //     <Typography gutterBottom variant="h5" component="div">
            //       {el.name}
            //     </Typography>
            //     <Typography variant="body2" sx={{ color: "text.secondary" }}>
            //       Lizards are a widespread group of squamate reptiles, with over
            //       6,000 species, ranging across all continents except Antarctica
            //     </Typography>
            //     <h6>{el.user}</h6>
            //     <Typography>{el.price} сом</Typography>
            //   </CardContent>
            //   <CardActions>
            //     <Button variant="outlined" color="error">
            //       В карзину
            //     </Button>
            //     <Button variant="contained" color="success">
            //       Заказат
            //     </Button>
            //   </CardActions>
            // </Card>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Home;
