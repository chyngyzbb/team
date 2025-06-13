import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./ProductCard.module.scss";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBasket } from "../../store/slice/basketSlice";
import { getBasketLocalStorage, saveToLocalStorage } from "../../localStorage";

const ProductCard = ({ el, idx }) => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  // const arr=[]
  const state=useSelector((state)=>state.basket.basket)

console.log(state);

  function addBasket(el){
    dispatch(setBasket(el))
    console.log(el);
    // arr.push(el)
  //  getBasketLocalStorage('basket',el)
  // saveToLocalStorage('basket',arr)
    // getBasketLocalStorage('basket')

  }
  return (
    <div className={styles.root}>
      <Card key={idx} sx={{ maxWidth: 305 }}>
        <CardMedia sx={{ height: 140 }} image={el.image} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {el.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <h6 onClick={() => navigate(`/detail-page/${el.user}`)}>{el.user}</h6>
          <Typography>{el.price} сом</Typography>
        </CardContent>
        <CardActions>
          <Button
          onClick={()=>addBasket(el)}
          variant="outlined" color="error">
            В карзину
          </Button>
          <Button
          variant="contained" color="success">
            Заказат
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
