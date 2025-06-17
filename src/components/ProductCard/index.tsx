import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./ProductCard.module.scss";
// import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBasket } from "../../store/slice/basketSlice";
// import { getBasketLocalStorage, saveToLocalStorage } from "../../localStorage";
import { MdOutlineMessage } from "react-icons/md";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { AppDispatch, RootState } from "../../store/store";
import { Product } from "../../api/api";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

interface PropsType{
  el:Product,
  idx:number
}


const ProductCard = ({el,idx}:PropsType) => {
  const navigate = useNavigate();
  const dispatch:AppDispatch = useDispatch();
  // const state = useSelector((state:RootState) => state.basket.basket);
  const api = "https://680dcc8ec47cb8074d913800.mockapi.io/message";
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState("");
  // const [second, setSecond] = useState("");
  const user = useSelector((state:RootState) => state.auth.user);


  const time = new Date().getHours();
  const time2 = new Date().getMinutes();
  const time3 = new Date().getSeconds();
  const time4 = new Date().getDate();
  const time5 = new Date().getMonth();
  const time6 = new Date().getFullYear();

  const dat = `${time6}.${time5}.${time4} _ ${time3}:${time2}:${time}`;

  const newMessage = {
    recipient: el.user,
    message: value,
    sender: user,
    date: dat,
  };
  async function sendMessage() {
    // console.log(newMessage);
    handleClose();

    const res = await axios.post(api, newMessage);
    return res.data;
  }
  // console.log(newMessage);
  // console.log();

  function addBasket(props:Product) {
    dispatch(setBasket(props));
    // console.log(el);
    // arr.push(el)
    //  getBasketLocalStorage('basket',el)
    // saveToLocalStorage('basket',arr)
    // getBasketLocalStorage('basket')
  }

  function openModal() {
    handleOpen();
  }

  return (
    <div className={styles.root}>
      <div>
        {/* <Button onClick={}>Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            //  sx={style}
            sx={{
              width: "300px",
              height: "50px",
              position: "fixed",
              right: "440px",
              top: "330px",
            }}
          >
            <div>
              <label htmlFor="chat" className="sr-only">
                Your message
              </label>
              <div
                style={{ padding: "20px", display: "flex", gap: "5px" }}
                className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700"
              >
                <button
                  type="button"
                  className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 18"
                  >
                    <path
                      fill="currentColor"
                      d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                    />
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                    />
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                    />
                  </svg>
                  <span className="sr-only">Upload image</span>
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
                    />
                  </svg>
                  <span className="sr-only">Add emoji</span>
                </button>
                <textarea
                  onChange={(e) => setValue(e.target.value)}
                  style={{ padding: "10px 10px", width: "700px" }}
                  id="chat"
                  rows={1}
                  className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
                <button
                  onClick={sendMessage}
                  type="submit"
                  className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-5 h-5 rotate-90 rtl:-rotate-90"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                  </svg>
                  <span className="sr-only">Send message</span>
                </button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
      <Card key={idx} sx={{ maxWidth: 305 }}>
        <CardMedia sx={{ height: 140 }} image={el.image} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {el.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography >
          <h1 style={{color:'blue',fontWeight:'700'}}  onClick={() => navigate(`/detail-page/${el.user}`)}>{el.user}</h1>
          <Typography>{el.price} сом</Typography>
        </CardContent>
        <CardActions
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button
            onClick={() => addBasket(el)}
            variant="outlined"
            color="error"
          >
            В карзину
          </Button>
          <Button variant="contained" color="success">
            Заказат
          </Button>
          <MdOutlineMessage
            onClick={() => openModal()}
            style={{ fontSize: "30px", color: "green" }}
          />
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
