import { TiMessages } from "react-icons/ti";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import axios from "axios";
import { RootState } from "../../store/store";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Favorite() {
  const navigate = useNavigate();
  const [message, setMessage] = React.useState("");
  const [userMessage, setUserMessage] = React.useState("");
  const user = useSelector((state: RootState) => state.product.products);
  const sender = useSelector((state: RootState) => state.auth.user);

  const api = "https://680dcc8ec47cb8074d913800.mockapi.io/message";

  const res1 = user.map((el) => el.user);
  const res = [...new Set(res1)];

  const [open, setOpen] = React.useState(false);
  const handleOpen = (el: string) => {
    setUserMessage(el);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  console.log(message);
  console.log(userMessage);
  console.log(sender);
  console.log(new Date());

  const time = new Date().getHours();
  const time2 = new Date().getMinutes();
  const time3 = new Date().getSeconds();
  const time4 = new Date().getDate();
  const time5 = new Date().getMonth();
  const time6 = new Date().getFullYear();

  console.log();

  const dat = `${time6}.${time5}.${time4} _ ${time3}:${time2}:${time}`;

  const newMessage = {
    recipient: userMessage,
    message,
    sender,
    date: dat,
  };
  async function sendMessage() {
    console.log(newMessage);
    setOpen(false);

    const res = await axios.post(api, newMessage);
    return res.data;
  }

  return (
    <>
      <Header />
      <div className="container">
        <div>
          {/* <Button onClick={handleOpen}>Open modal</Button> */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h4>{userMessage}</h4>
              <TextField
                onChange={(e) => setMessage(e.target.value)}
                id="filled-basic"
                label="Сообщения"
                variant="filled"
              />
              <Button
                onClick={() => sendMessage()}
                variant="contained"
                color="success"
              >
                Отправить
              </Button>
            </Box>
          </Modal>
        </div>
        <List sx={{ width: "100wh", padding: "50px 0" }}>
          {res.map((el) => (
            // <li onClick={() => navigate(`/detail-page/${el}`)}>
            //   {idx + 1}.{el}
            // </li>
            <div>
              <ListItem
                sx={{ width: "100wh", bgcolor: "background.paper" }}
                alignItems="flex-start"
              >
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  onClick={() => navigate(`/detail-page/${el}`)}
                  primary={el}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: "text.primary", display: "inline" }}
                      >
                        {/* Ali Connors */}
                      </Typography>

                      {/* {" — I'll be in your neighborhood doing errands this…"} */}
                    </React.Fragment>
                  }
                />
                <TiMessages
                  onClick={() => handleOpen(el)}
                  style={{ fontSize: "30px" }}
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
