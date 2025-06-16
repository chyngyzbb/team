import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Basket from "./page/Basket";
import Favorite from "./page/Favorite";
import Order from "./page/Order";
import Profile from "./page/Profile";
import AddProduct from "./page/AddProduct";
import MyProduct from "./page/MyProduct";
import Exit from "./page/Exit";
import Category from "./page/Category";
import styles from "./App.module.scss";
import About from "./page/About";
import Contacts from "./page/Kontakty";
import Vakansii from "./page/Vakansii";
import { useEffect, useState } from "react";
import { getLocalStorage } from "./localStorage";
import DetailPage from "./components/DetailPage";
import Message from "./page/Message";
import 'flowbite';



function App() {
  // const [isregister, setIsregister] = useState(false);
  const user = getLocalStorage("user");
  return (
    <div style={{height:'100vh'}}>
      {user ? (
        <>
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/order" element={<Order />} />
            <Route path="/category" element={<Category />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/my-product" element={<MyProduct />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/vakansii" element={<Vakansii />} />
            <Route path="/about" element={<About/>} />
            <Route path="/message" element={<Message/>} />
            <Route path="/" element={<Exit />} />
            <Route path="/detail-page/:user" element={<DetailPage />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Exit />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
