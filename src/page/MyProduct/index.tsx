import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts, updateProduct } from "../../api/api";
import { AppDispatch, RootState } from "../../store/store";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./MyProduct.module.scss";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Product } from "../../Types/types";

const MyProduct: React.FC = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [idT, setIdT] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const { error, loading, products } = useSelector(
    (state: RootState) => state.product
  );
  const users = useSelector((state: RootState) => state.auth.user);

  const res = products?.filter((el: Product) =>
    el.user === users ? el : undefined
  );
  console.log(res);

  function removeFunc(id: string) {
    dispatch(deleteProduct(id));
  }
  function editFunk(el: Product) {
    setName(el.name);
    setPrice(el.price);
    setUrl(el.image);
    setIdT(el._id);
    handleOpen();
  }
  function putFunc() {
    if (users !== null) {
      const newPro: Product = {
        name,
        price,
        image: url,
        _id: idT,
        user: users,
        client: [],
      };
      dispatch(updateProduct(newPro));
    }

    handleClose();
  }
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (loading) return <p>Жүктөлүүдө...</p>;
  if (error) return <p>Ката: {error}</p>;
  return (
    <>
      <Header />
      <div className="container">
        <div className="modal">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
              sx={style}
            >
              <input
                style={{ border: "1px solid black" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
              <input
                style={{ border: "1px solid black" }}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
              />
              <input
                style={{ border: "1px solid black" }}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="text"
              />
              <button
                onClick={() => putFunc()}
                type="button"
                style={{ padding: "5px 0" }}
                className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
              >
                Сохранить
              </button>
            </Box>
          </Modal>
        </div>
        <div className={styles.root}>
          {products && products.length > 0 ? (
            res.map((el, idx) => (
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
                  <Typography
                    variant="body2"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      color: "red",
                    }}
                  >
                    {/* {el.client.map((cli)=>cli.length>2?`Заказали: ${cli}`:`нет`)} */}
                    {el.client.length > 0
                      ? `Заказали: ${el.client.map((el) => el)}`
                      : ``}
                  </Typography>
                  <Typography>{el.price} $</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => removeFunc(el._id)}
                  >
                    Удалить
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => editFunk(el)}
                  >
                    Редактировать
                  </Button>
                </CardActions>
              </Card>
            ))
          ) : (
            <p>У вас нет товаров!</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyProduct;
