import { Fragment, useEffect, useState } from "react";
import Link from "next/link";

export function PushbarMenu() {
  const [pushbar, setPushbar] = useState({});

  useEffect(() => {
    window.addEventListener("load", () => {
      setPushbar(
        new Pushbar({
          blur: true,
          overlay: true,
        })
      );
      //   let pushbar = new Pushbar({
      //     blur: true,
      //     overlay: true,
      //   });
    });
  }, [pushbar]);

  return (
    <Fragment>
      <Link href="/">
        <i className="fas fa-tshirt logo ml"></i>
      </Link>

      <i
        className="fas fa-bars icons ml-icon ml"
        onClick={() => {
          pushbar.open("pushbar-menu");
        }}
      ></i>

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
        .activo,
        a:hover {
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
          .ml {
            display: inherit;
          }
        }
      `}</style>
    </Fragment>
  );
}
