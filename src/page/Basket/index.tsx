// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

// const Basket  = () => {

//     const state=useSelector((state)=>state.basket.basket)
//     console.log(state);

//     return (
//          <div>

//         </div>
//     );
// };

// export default Basket ;
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { Button, ImageList, ImageListItem } from "@mui/material";

export default function Basket() {
  const state = useSelector((state) => state.basket.basket);
  console.log(state);

  return (
    <div className="container">
      <List sx={{ width: "100wh", padding: "50px 0" }}>
        <h3>Карзина</h3>
        {state.map((el) => (
          <div>
            <ListItem
              sx={{  bgcolor: "background.paper", display:'flex',justifyContent:'space-between',gap:'20px' }}
              alignItems="flex-start"
            >
              <ListItemAvatar>
                <img width={80} height={50} alt="Remy Sharp" src={el.image} />
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
                    <Button variant="contained" color="success">
                      Заказат
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
  );
}
