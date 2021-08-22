//import * as styles from "./style.js";
import styles from "./Navbar.module.css";

export const Navbar = () => (
  <header className={styles.header}>
    <div className="logo">Bordados Y Estampados</div>
    <div className="nav">
      <a href="#" className="item">
        Inicio
      </a>
      <a href="#" className="item">
        Productos
      </a>
      <a href="#" className="item">
        Bordados
      </a>
      <a href="#" className="item">
        Estampados
      </a>
      <a href="#" className="item">
        Nosotros
      </a>
      <a href="#" className="item">
        Preguntas Frecuentes
      </a>
      <a href="#" className="item">
        Contacto
      </a>
    </div>
  </header>
);
