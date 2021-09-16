//import * as styles from "./style.js";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PushbarMenu } from "./PushbarMenu";

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

      <PushbarMenu />

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
