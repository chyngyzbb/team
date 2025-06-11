import { Route, Routes } from "react-router-dom";
import "tailwindcss";

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

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/order" element={<Order />} />
        <Route path="/category" element={<Category />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/my-product" element={<MyProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/vakansii" element={<Vakansii />} />
        <Route path="/exit" element={<Exit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
