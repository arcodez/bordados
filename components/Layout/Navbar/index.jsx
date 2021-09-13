//import * as styles from "./style.js";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
        <Link href="/">
          <a className="activo">Inicio</a>
        </Link>
        <Link href="#">
          <a>Bordados</a>
        </Link>
        <Link href="#">
          <a>Estampados</a>
        </Link>

        <Link href="/">
          <a>
            <i className="fas fa-tshirt logo"></i>
          </a>
        </Link>

        <Link href="#">
          <a>Nosotros</a>
        </Link>
        <Link href="#">
          <a>F. A. Q</a>
        </Link>
        <Link href="#">
          <a>Contacto</a>
        </Link>
      </nav>

      <div className="social icons">
        <Link href="/cart">
          <a>
            <i className="fas fa-shopping-cart"></i>
          </a>
        </Link>
        <i className="fab fa-instagram"></i>
      </div>

      <i className="fas fa-tshirt logo ml"></i>

      <i
        cl="fas fa-bars icons ml-icon ml"
        onClick={() => {
          pushbar.open("pushbar-menu");
        }}
      ></i>

      {/* Pushbar Menu  */}

      <div
        data-pushbar-id="pushbar-menu"
        className="pushbar-menu"
        data-pushbar-direction="right"
      >
        <button data-pushbar-close>
          <i className="fas fa-times"></i>
        </button>
        <a className="activo">Inicio</a>
        <a>Bordados</a>
        <a>Estampados</a>
        <i className="fas fa-tshirt logo ml"></i>
        <a>Nosotros</a>
        <a>F. A. Q</a>
        <a>Contacto</a>

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

        .ml {
          display: none;
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

        .pushbar-menu {
          background: var(--noche-clara);
          display: flex;
          flex-direction: column;
          align-items: center;
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
