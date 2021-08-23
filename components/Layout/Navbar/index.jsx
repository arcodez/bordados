//import * as styles from "./style.js";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {

  const [theme, setTheme] = useState({
    active: "off",
    icon: "sun.svg"
  })

  function handleActivo() {
    if (theme.active === "off") {
      setTheme({
        active: "on",
        icon: "moon.svg"
      })
    } else {
      setTheme({
        active: "off",
        icon: "sun.svg"
      })
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.change}>

        <i className={`fas fa-toggle-${theme.active} ${styles.social}`} onClick={() => handleActivo()}></i>
        <img src={theme.icon} alt="" />
      </div>

      <nav>
        <a href="#" className={styles.activo}>
          Inicio
        </a>
        <a href="#">Bordados</a>
        <a href="#">Estampados</a>
        <i className={`fas fa-tshirt ${styles.logo}`}></i>
        <a href="#">Nosotros</a>
        <a href="#">F. A. Q</a>
        <a href="#">Contacto</a>
      </nav>

      <div className={styles.social}>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-github"></i>
      </div>
    </header>
  )
};
