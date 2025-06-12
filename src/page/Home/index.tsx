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

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { error, loading, products } = useSelector(
    (state: RootState) => state.product
  );

  const res=products.data?.filter((el)=>el.user?el:'')
  console.log(res);
  
  // const products= useSelector(
  //   (state: RootState) => state.product.products.data
  // );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log("myProduct:", products.data);
  // console.log(fetchProducts());

  if (loading) return <p>Жүктөлүүдө...</p>;
  if (error) return <p>Ката: {error}</p>;

  return (
    <div className="container">
      <div className={styles.root}>
        {products.data && products.data.length > 0 ? (
          products.data.map((el, idx) => (
            <Card key={idx} sx={{ maxWidth: 305 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={el.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {el.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <h6>{el.user}</h6>
                <Typography>{el.price} $</Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" color="error">
                  В карзину
                </Button>
                <Button variant="contained" color="success">
                  Заказат
                </Button>
              </CardActions>
            </Card>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Home;
