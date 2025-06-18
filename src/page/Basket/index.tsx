import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { Product, updateProduct } from "../../api/api";
import { removeBasket } from "../../store/slice/basketSlice";
import { AppDispatch, RootState } from "../../store/store";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Basket() {
  const state = useSelector((state: RootState) => state.basket.basket);
  const product = useSelector((state: RootState) => state.product.products);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch: AppDispatch = useDispatch();

  console.log(product);
  function orderFunc(el: Product) {
    if (el.user !== null && user !== null) {
      const newPro: Product = {
        name: el.name,
        price: el.price,
        image: el.image,
        _id: el._id,
        user: el.user,
        client: [...el.client, user], // массив менен
      };
      dispatch(updateProduct(newPro));
    }

    console.log(el.client);
    console.log(el);
  }

  function removeFunc(el: Product) {
    console.log(el);
    dispatch(removeBasket(el._id));
  }
  return (
    <>
      <Header />
      <div className="container">
        <List sx={{ width: "100vw", padding: "50px 0" }}>
          <h3>Карзина</h3>
          {state.map((el: Product, idx: number) => (
            <div key={idx}>
              <ListItem
                sx={{
                  bgcolor: "background.paper",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
                alignItems="flex-start"
              >
                <ListItemAvatar>
                  <img
                    style={{ width: "100px", height: "150px" }}
                    alt="Remy Sharp"
                    src={el.image}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={el.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: "text.primary", display: "inline" }}
                      >
                        {el.price} сом
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                      <Button
                        onClick={() => orderFunc(el)}
                        variant="contained"
                        color="success"
                      >
                        Заказат
                      </Button>
                      <Button
                        style={{ margin: "0 30px" }}
                        onClick={() => removeFunc(el)}
                        variant="contained"
                        color="error"
                      >
                        Удалит
                      </Button>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))}
        </List>
      </div>
      <Footer />
    </>
  );
}
