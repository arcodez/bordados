//import * as styles from "./style.js";
import styles from "./Navbar.module.css";

export const Navbar = () => (
  <header className={styles.header}>
    <div className={styles.change}>
      <i className={"fas fa-toggle-off " + styles.social}></i>
      <img src="/sun.svg" alt="" />
    </div>

    <nav>
      <a href="#" className={styles.activo}>
        Inicio
      </a>
      <a href="#">Bordados</a>
      <a href="#">Estampados</a>
      <i className={`fas fa-tshirt ${styles.logo}`}></i>
      <a href="#">Nosotros</a>
      <a href="#">Preguntas Frecuentes</a>
      <a href="#">Contacto</a>
    </nav>

    <div className={styles.social}>
      <i className="fab fa-instagram"></i>
      <i className="fab fa-github"></i>
    </div>
  </header>
);
