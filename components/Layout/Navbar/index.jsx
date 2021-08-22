//import * as styles from "./style.js";
import styles from "./Navbar.module.css";

export const Navbar = () => (
  <header className={styles.header}>
    <div>Swicth Mode</div>

    <nav>
      <a href="#" className={styles.button}>
        Inicio
      </a>
      <a href="#">Bordados</a>
      <a href="#">Estampados</a>
      <i className="fas fa-tshirt "></i>
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
