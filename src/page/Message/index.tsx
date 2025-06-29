// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./Message.module.scss";
import { TiMessage } from "react-icons/ti";
import { MdOutlineMessage } from "react-icons/md";
import { MessageType, MessageTypeId } from "../../Types/types";
import { AppDispatch, RootState } from "../../store/store";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { createMessage, fetchMessage, updateMessage } from "../../api/api";

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

const Message = () => {
  // const api = "https://680dcc8ec47cb8074d913800.mockapi.io/message";
  const [message, setMessage] = useState<MessageTypeId[]>([]);
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const mess = useSelector((state: RootState) => state.message.message);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [sender, setSender] = useState("");
  const [value, setValue] = useState("");
  const [dialog, setDialog] = useState("");
  const [messageSetting, setMessageSetting] = useState('');
  // const [newMessageSettings, setNewMessageSettings] = useState(null);

  const time = new Date().getHours();
  const time2 = new Date().getMinutes();
  const time3 = new Date().getSeconds();
  const time4 = new Date().getDate();
  const time5 = new Date().getMonth() + 1;
  const time6 = new Date().getFullYear();
  const dat = `${time6}.${time5}.${time4} _ ${time3}:${time2}:${time}`;

  const a = new Date();
  console.log(a);
  console.log(time);
  console.log(dat);

  const newMessage:MessageType = {
    recipient: sender,
    message: value,
    sender: user ? user : "",
    date: a + "",
    settings: {
      visibility: false,
      delete: false,
      edit: false,
      copy: false,
      reading: false,
    },
  };

  async function sendMessage() {
    console.log(newMessage);
    handleClose();
    dispatch(createMessage(newMessage));
  }

  function editMessageFunc(el:MessageTypeId) {
     const updMessage:MessageTypeId = {
        id: el.id,
        recipient: el.recipient,
        message: el.message,
        sender: el.sender,
        date: el.date,
        settings: {
          visibility: el.settings.visibility,
          delete:el.settings.delete,
          edit: true,//el.settings.edit,
          copy: el.settings.copy,
          reading: el.settings.reading,
        },
      };
    // const res={...newMessageSettings,settings:newMessageSettings.settings,settings.edit:true}
    // console.log(res);
    
    dispatch(updateMessage(updMessage));
        setMessageSetting('');

  }

  function updateMessageFunc(el:MessageTypeId) {
     const updMessage:MessageTypeId = {
        id: el.id,
        recipient: el.recipient,
        message: el.message,
        sender: el.sender,
        date: el.date,
        settings: {
          visibility: el.settings.visibility,
          delete: true,// el.settings.delete,
          edit: el.settings.edit,
          copy: el.settings.copy,
          reading: el.settings.reading,
        },
      };
    // const res=newMessageSettings
    // console.log(updMessage);
    // handleClose();
    dispatch(updateMessage(updMessage));
        setMessageSetting('');

  }
  // const res = await axios.post(api, newMessage);
  // return res.data;
  function handleOpenFunc() {
    setSender(dialog);
    handleOpen();
  }

  async function getMessage() {
    dispatch(fetchMessage());
    // const res = await axios.get(api);
    setMessage(mess);
  }

  function openSettingsFunc(el:MessageTypeId) {
    if (el.sender === user) {
     
      // setNewMessageSettings(updMessage);
      if (el.id === messageSetting) {
        setMessageSetting('');
      } else {
        setMessageSetting(el.id);
      }
    }
  }
  //     READING логикасы жазылууда..........
  //  const myNewMessage = message.filter(
  //   (el: MessageType) => el.recipient === user
  // );
  // const myNewMessage2=myNewMessage.filter(
  //   (el)=>el.settings.reading===false?el.sender:'')

  const myMessage = message.filter(
    (el: MessageTypeId) => el.recipient === user || el.sender === user
  );
  const myDialog = myMessage.filter(
    (el: MessageTypeId) =>
      (el.sender === dialog && el.recipient === user) ||
      (el.sender === user && el.recipient === dialog)
  );

  const res = myMessage.map((el: MessageTypeId) => el.sender);
  const res2 = myMessage.map((el: MessageTypeId) => el.recipient);
  const res3 = [...res, ...res2];
  const userMessage = [...new Set(res3)];
  console.log(res);
  console.log(res2);
  console.log(res3);
  console.log(myMessage);
  console.log(userMessage);
  console.log(myDialog);

  
  useEffect(() => {
    // if(mess.length>0){
    dispatch(fetchMessage());
    getMessage();
    // }
  }, [dispatch, mess.length]);

  return (
    <>
      <Header />
      <div className={styles.root}>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "30px 0",
          }}
        >
          <div>
            {/* <Button oClick={handleOpen}>Open modal</Button> */}
            <Modal
              style={{ bottom: "-310px", right: "-500px" }}
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                // sx={style}
                // style={{with:'300px'}}
                sx={{
                  width: "300px",
                  height: "200px",
                  position: "fixed",
                  right: "100px",
                  top: "100px",
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
                    // defaultValue={}
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
          <div
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
            }}
            className="center"
          >
            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
              {userMessage.map((el) => (
                <div
                  style={{
                    borderRadius: "8px",
                    padding: "0 8px",
                    cursor: "pointer",
                    background: `${el === dialog ? "grey" : ""}`,
                    // background:"red"
                  }}
                >
                  <li style={{ padding: "14px 0" }} className="pb-3 sm:pb-4">
                    <div
                      onClick={() => setDialog(el)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                      className="flex items-center space-x-4 rtl:space-x-reverse"
                    >
                      <div className="shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://t3.ftcdn.net/jpg/02/43/12/40/360_F_243124072_6XpPAWH0VM911MjRBfqp4QQ5PKsvD6T9.jpg"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {/* Имя */}
                          {el}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {/* {el.sender} */}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <TiMessage style={{ fontSize: "28px", color: "red" }} />
                      </div>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "start",
                width: "600px",
                gap: "7px",
                //   background:'blue'
              }}
            >
              {myDialog.map((el: MessageTypeId) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: `${
                      el.sender === user ? "row-reverse" : "row"
                    }`,
                    marginLeft: `${el.sender === user ? "200px" : "0"}`,
                    textAlign: `${el.sender === user ? "end" : "start"}`,
                  }}
                  className="flex items-start gap-2.5"
                >
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://as2.ftcdn.net/jpg/00/49/22/63/1000_F_49226343_zrW0Mlu6hqxzgN2gUBwW8EGaHmD5GZU6.jpg"
                    alt="Jese image"
                  />
                  <div
                    style={{ padding: "10px" }}
                    className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-xl rounded-es-xl dark:bg-gray-700"
                  >
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="text-sm font-semibold text-gray-900 dark:text-gray-400">
                        {el.sender}
                      </span>
                      <span
                        style={{ fontSize: "9px", lineHeight: "14px" }}
                        className=" font-normal text-gray-500 dark:text-gray-400"
                      >
                        {el.date}
                      </span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                      {el.settings.delete ? (
                        <span style={{ color: "grey", fontSize: "12px" }}>
                          Сообщения удальено
                        </span>
                      ) : (
                       <>
                        <p>{el.message}</p>
                        <p style={{fontSize:'10px',color:'grey'}}>{el.settings.edit?"изменено":''}</p>
                       </>
                      )}
                    </p>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {/* Delivered */}
                    </span>
                  </div>
                  <button
                    onClick={() => openSettingsFunc(el)}
                    id="dropdownMenuIconButton"
                    data-dropdown-toggle="dropdownDots"
                    data-dropdown-placement="bottom-start"
                    className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http:www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 4 15"
                    >
                      <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                  </button>
                  <div
                    style={{
                      display: `${el.id !== messageSetting ? "none" : "block"}`,
                    }}
                    // hidden
                    id="dropdownDots"
                    className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-40 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      style={{ textAlign: "center",cursor:'pointer' }}
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Reply
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => editMessageFunc(el)}
                          // href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Copy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Report
                        </a>
                      </li>
                      <li>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => updateMessageFunc(el)}
                          // href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
              <MdOutlineMessage
                onClick={() => handleOpenFunc()}
                style={{
                  display: `${dialog === "" ? "none" : "block"}`,
                  position: "fixed",
                  right: "30px",
                  top: "100px",
                  fontSize: "33px",
                  color: "white",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Message;
