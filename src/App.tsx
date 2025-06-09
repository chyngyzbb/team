import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Kontakty from "./page/Kontakty";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Kontakty />
      <Footer />
    </>
  );
}

export default App;
