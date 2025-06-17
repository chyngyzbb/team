import AdbIcon from "@mui/icons-material/Adb";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";
import ins from "./img/ins.svg";
import vc from "./img/vc.svg";
import face from "./img/facebook.svg";
import odno from "./img/Vector.svg";
import tel from "./img/Vector 188 (Stroke).svg";

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.footer}>
          <div className={styles.left}>
            <AdbIcon />
            <NavLink className={styles.nav} to={"/about"}>
              О компании
            </NavLink>
            <NavLink className={styles.nav} to={"/contacts"}>
              Контакты{" "}
            </NavLink>
            <NavLink className={styles.nav} to={"/vakansii"}>
              Вакансии
            </NavLink>
            <NavLink className={styles.nav} to={"/"}>
              Статьи
            </NavLink>
            <NavLink className={styles.nav} to={"/"}>
              Политика обработки персональных данных
            </NavLink>
          </div>
          <div className={styles.right}>
            <img className={styles.img} src={ins} alt="" />
            <img className={styles.img} src={vc} alt="" />
            <img className={styles.img} src={face} alt="" />
            <img className={styles.img} src={odno} alt="" />
            <span className={styles.span}>
              <img className={styles.imgPhone} src={tel} alt="" />8 800 777 33
              33
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
