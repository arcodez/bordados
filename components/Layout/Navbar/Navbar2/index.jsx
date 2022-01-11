import { useEffect } from "react";
import { useHandleNavbar } from "../../../../hooks/useHandleNavbar";
import Link from "next/link";

export const Navbar2 = () => {
  const { theme, handleActivo } = useHandleNavbar();

  return (
    <>
      <header className="header-nav">
        <nav className="nav">
          <div className="logo">
            <i
              className={`fas fa-toggle-${theme.active}`}
              onClick={() => handleActivo()}
            />
            <img className="logo_img" src={theme.icon} alt="Navbar Mode" />
          </div>

          {/* Mobile Icons */}
          <li className="nav-menu-item ml">
            <Link href="/">
              <a>
                <i className="fas fa-tshirt" />
              </a>
            </Link>
          </li>

          <button className="nav-toggle" aria-label="Abrir menú">
            <i className="fas fa-bars" />
          </button>

          {/* Links Items */}
          <div className="nav-menu">
            <ul className="links">
              <li className="nav-menu-item">
                <Link href="/">
                  <a className="nav-menu-link nav-link nav-menu-link_active">
                    Inicio
                  </a>
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link href="/examples#bordados">
                  <a className="nav-menu-link nav-link">Bordados</a>
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link href="/about">
                  <a className="nav-menu-link ">Nosotros</a>
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link href="#">
                  <a>
                    <i className="fas fa-tshirt" />
                  </a>
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link href="/examples#estampados">
                  <a className="nav-menu-link ">Estampados</a>
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link href="/faq">
                  <a className="nav-menu-link ">F.A.Q</a>
                </Link>
              </li>
              <li className="nav-menu-item agarrar">
                <Link href="/contact">
                  <a className="nav-menu-link ">Contacto</a>
                </Link>
              </li>
            </ul>

            {/* Cart Icon */}
            <ul className="icons">
              <li className="nav-menu-item">
                <Link href="/cart">
                  <a className="nav-link nav-menu-link logo">
                    <i className="fas fa-shopping-cart" />
                  </a>
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link href="#">
                  <a className="nav-link nav-menu-link logo">
                    <i className="fab fa-instagram" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <style jsx global>{`
      body {
        background: ${ theme.active === "off" && "white" };
        color: ${ theme.active === "off" && "black" };

      }
      `}</style>
    </>
  );
};
