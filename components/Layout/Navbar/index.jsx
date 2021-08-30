//import * as styles from "./style.js";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";

export const Navbar = () => {
  const [theme, setTheme] = useState({
    active: "off",
    icon: "/sun.svg",
  });
  const [pushbar, setPushbar] = useState({});
  useEffect(() => {
    window.addEventListener("load", () => {
      setPushbar(
        new Pushbar({
          blur: true,
          overlay: true,
        })
      );
    });
  }, []);

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
          className={`fas fa-toggle-${theme.active} icons`}
          onClick={() => handleActivo()}
        ></i>
        <img src={theme.icon} alt="" className="navbar_icon" />
      </div>

      <nav className="nav">
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

      <div className="social icons">
        <i className="fas fa-shopping-cart"></i>
        <i className="fab fa-instagram"></i>
      </div>

      <i className="fas fa-tshirt logo ml"></i>

      <i
        className="fas fa-bars icons ml-icon ml"
        onClick={() => {
          pushbar.open("pushbar-menu");
        }}
      ></i>

      {/* Pushbar Menu  */}

      <div data-pushbar-id="pushbar-menu" data-pushbar-direction="right">
        <button data-pushbar-close>
          <i className="fas fa-times"></i>
        </button>
        <a href="#" className="activo">
          Inicio
        </a>
        <a href="#">Bordados</a>
        <a href="#">Estampados</a>
        <i className="fas fa-tshirt logo"></i>
        <a href="#">Nosotros</a>
        <a href="#">F. A. Q</a>
        <a href="#">Contacto</a>

        <div className="icons">
          <i className="fas fa-shopping-cart"></i>
          <i className="fab fa-instagram"></i>
        </div>
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

        .icons {
          font-size: 25px;
        }

        .social i {
          margin: 5px;
        }

        .ml-icon {
          display: none;
          padding: 5px;
          border-radius: 5px;
        }

        .ml-icon:hover {
          background: var(--azul);
          animation: 2s rotate;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(180deg);
          }
        }

        #pushbar-menu {
          background: var(--noche-clara);
          display: flex;
          flex-direction: column;
        }

        @-webkit-keyframes rotate {
          from {
            -webkit-transform: rotate(0deg);
          }
          to {
            -webkit-transform: rotate(360deg);
          }
        }

        @media screen and (max-width: 800px) {
          .nav {
            display: none;
          }

          .social {
            display: none;
          }

          .ml {
            display: inherit;
          }
        } ;
      `}</style>
    </header>
  );
};
