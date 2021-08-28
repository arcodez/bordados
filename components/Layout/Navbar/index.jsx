//import * as styles from "./style.js";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";

export const Navbar = () => {
  const [theme, setTheme] = useState({
    active: "off",
    icon: "/sun.svg",
  });

  function handleActivo() {
    if (theme.active === "off") {
      setTheme({
        active: "on",
        icon: "/moon.svg",
      });
    } else {
      setTheme({
        active: "off",
        icon: "/sun.svg",
      });
    }
  }

  return (
    <header className="header">
      <div className="change">
        <i
          className={`fas fa-toggle-${theme.active} social`}
          onClick={() => handleActivo()}
        ></i>
        <img src={theme.icon} alt="" className="navbar_icon" />
      </div>

      <nav>
        <a href="#" className="activo">
          Inicio
        </a>
        <a href="#">Bordados</a>
        <a href="#">Estampados</a>
        <i className="fas fa-tshirt logo"></i>
        <a href="#">Nosotros</a>
        <a href="#">F. A. Q</a>
        <a href="#">Contacto</a>
      </nav>

      <div className="social">
        <i className="fas fa-shopping-cart"></i>
        <i className="fab fa-instagram"></i>
      </div>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          text-align: center;
          padding: 20px;
        }

        .header a {
          transition: 0.5s ease all;
          margin: 10px;
          color: white;
        }

        .header img {
          width: 25px;
          margin: 0 5px;
        }

        .navbar_icon {
          width: 25px;
          margin: 0 5px;
        }

        .change {
          display: flex;
          align-items: center;
        }

        .activo,
        .header a:hover {
          background: var(--azul);
          padding: 10px;
          border-radius: 20px;
        }

        .logo {
          font-size: 30px;
          margin: 0 20px;
        }

        .social {
          font-size: 25px;
        }

        .social i {
          margin: 5px;
        }
      `}</style>
    </header>
  );
};
