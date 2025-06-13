import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts, updateProduct } from "../../api/api";
import { RootState } from "../../store/store";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./MyProduct.module.scss";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const MyProduct: React.FC = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [idT, setIdT] = useState("");
  const dispatch = useDispatch();
  const { error, loading, products } = useSelector(
    (state: RootState) => state.product
  );
  const users = useSelector((state: RootState) => state.auth.user);

  const res = products?.filter((el) =>
    el.user === users ? el : undefined
  );
  console.log(res);

  // const products= useSelector(
  //   (state: RootState) => state.product.products.data
  // );
  let newPro={
    name,
    price,
    image:url,
    _id:idT
  }
  function removeFunc(id:string) {
    dispatch(deleteProduct(id));
  }
  function editFunk(el:string) {
    setIdT(el._id)
    handleOpen()
  }
  function putFunc(_id:string){
    dispatch(updateProduct({_id,newPro}))
  }
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log("myProduct:", products.data);
  // console.log(fetchProducts());


  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

 
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  if (loading) return <p>Жүктөлүүдө...</p>;
  if (error) return <p>Ката: {error}</p>;
  return (
    <div className="container">
      <div className="modal">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <input  onChange={((e)=>setName(e.target.value))} type="text" />
            <input  onChange={((e)=>setPrice(e.target.value))} type="text" />
            <input  onChange={((e)=>setUrl(e.target.value))} type="text" />
            <button onClick={()=>putFunc(idT)}>Сохранит</button>
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
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <Typography>{el.price} $</Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => removeFunc(el._id)}
                >
                  Удалит
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => editFunk(el)}
                >
                  Редактироват
                </Button>
              </CardActions>
            </Card>
          ))
        ) : (
          <p>У вас нет товаров!</p>
        )}
      </div>
    </div>
  );
};

export default MyProduct;
