
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";  
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { Button} from "@mui/material";
import { updateProduct } from "../../api/api";
import { saveToLocalStorage } from "../../localStorage";
import { setBasket } from "../../store/slice/basketSlice";

export default function Basket() {
  const state = useSelector((state) => state.basket.basket);
  const product = useSelector((state) => state.product.products);
  const user = useSelector((state) => state.auth.user);
  const dispatch=useDispatch()

  console.log(product);

  
  function orderFunc(el){
    const newPro={
    name:el.name,
    price:el.price,
    image:el.image,
    _id:el._id,
    user:el.user,
    client:[...el.client,user]
  }
  const newLoc = state.filter((loc)=>loc._id!==el._id)
    // if(loc.id!==el.id){
//       return {...el,...el.client=user}
//     }else{
//        return el
//     }
//    } 
// )
newLoc.push(newPro)
    dispatch(updateProduct({_id:el._id,newPro}))
    dispatch(setBasket(newLoc))

    function removeFunc(el){
console.log(el);

    }

};
  return (
    <div className="container">
      <List sx={{ width: "100vw", padding: "50px 0" }}>
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
                    <Button
                    onClick={()=>orderFunc(el)}
                     variant="contained" color="success">
                      Заказат
                    </Button>
                     <Button
                     style={{margin:'0 30px'}}
                    onClick={()=>removeFunc(el)}
                     variant="contained" color="error">
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
  );
}
