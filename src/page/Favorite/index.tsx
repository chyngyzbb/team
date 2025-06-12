import React from "react";
import { useSelector } from "react-redux";
import styles from "./Favorite.module.scss";
import { useNavigate } from "react-router-dom";

const Favorite = () => {
    const navigate=useNavigate()
  const user = useSelector((state) => state.product.products);
  let res = [];
  user.map((el) => {
    if (res.includes(el.user)) {
      el;
    } else {
      res.push(el.user);
    }
  });

  console.log("User:", res);

  return (
    <div className="container">
      <div className={styles.root}>
        <h2>Ползовательи</h2>
        {res.map((el, idx) => (
          <li onClick={() => navigate("/detail-page")}>
            {idx + 1}.{el}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
