import { useEffect } from "react";

const CarouselItem = ({ name = "", img = "" }) => (
  <div className="carousel__elemento">
    <img
      src={
        img ||
        "https://mymodernmet.com/wp/wp-content/uploads/2020/06/needle-painting-embroidery-emillie-ferris-12.jpg"
      }
      alt={name || "Rock and Roll Hall of Fame"}
    />

    <p>{name || "Rock and Roll Hall of Fame"}</p>
    <style jsx>{`
      .carousel__elemento {
        text-align: center;
      }
    `}</style>
  </div>
);

export function Carousel() {
  useEffect(() => {
    window.addEventListener("load", function () {
      new Glider(document.querySelector(".carousel__lista"), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: ".carousel__indicadores",
        arrows: {
          prev: ".carousel__anterior",
          next: ".carousel__siguiente",
        },
        responsive: [
          {
            // screens greater than >= 775px
            breakpoint: 450,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            // screens greater than >= 1024px
            breakpoint: 800,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
        ],
      });
    });
  }, []);

  return (
    <div className="contenedor">
      {/* <main className="contenido-principal">
        <img
          src="https://mymodernmet.com/wp/wp-content/uploads/2020/06/needle-painting-embroidery-emillie-ferris-12.jpg"
          alt="Dome of the German Bundestag"
          className="contenido-principal__imagen"
        />
        <div className="contenido-principal__contenedor">
          <h1 className="contenido-principal__titulo">
            Dome of the German Bundestag
          </h1>
          <p className="contenido-principal__resumen">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
            commodo orci. Nulla ipsum ante, auctor a odio id, bibendum accumsan
            mauris.
          </p>
          <p className="contenido-principal__resumen">
            Fusce malesuada mollis ante, at elementum mi maximus nec. Praesent
            volutpat, tortor sed condimentum sagittis, mi diam fringilla nibh.
          </p>
        </div>
      </main> */}
      <div className="carousel">
        <div className="carousel__contenedor">
          <button aria-label="Anterior" className="carousel__anterior">
            <i className="fas fa-chevron-left" />
          </button>
          <div className="carousel__lista">
            <CarouselItem />
            <div className="carousel__elemento">
              <img
                src="https://mymodernmet.com/wp/wp-content/uploads/2020/06/needle-painting-embroidery-emillie-ferris-12.jpg"
                alt="Constitution Square - Tower I"
              />
              <p>Constitution Square - Tower I</p>
            </div>
            <div className="carousel__elemento">
              <img
                src="https://mymodernmet.com/wp/wp-content/uploads/2020/06/needle-painting-embroidery-emillie-ferris-12.jpg"
                alt="Empire State Building"
              />
              <p>Empire State Building</p>
            </div>
            <div className="carousel__elemento">
              <img
                src="https://mymodernmet.com/wp/wp-content/uploads/2020/06/needle-painting-embroidery-emillie-ferris-12.jpg"
                alt="Harmony Tower"
              />
              <p>Harmony Tower</p>
            </div>
            <div className="carousel__elemento">
              <img
                src="https://mymodernmet.com/wp/wp-content/uploads/2020/06/needle-painting-embroidery-emillie-ferris-12.jpg"
                alt="Empire State Building"
              />
              <p>Empire State Building</p>
            </div>
            <div className="carousel__elemento">
              <img
                src="https://mymodernmet.com/wp/wp-content/uploads/2020/06/needle-painting-embroidery-emillie-ferris-12.jpg"
                alt="Harmony Tower"
              />
              <p>Harmony Tower</p>
            </div>
            <div className="carousel__elemento">
              <img
                src="https://mymodernmet.com/wp/wp-content/uploads/2020/06/needle-painting-embroidery-emillie-ferris-12.jpg"
                alt="Empire State Building"
              />
              <p>Empire State Building</p>
            </div>
            <div className="carousel__elemento">
              <img
                src="https://mymodernmet.com/wp/wp-content/uploads/2020/06/needle-painting-embroidery-emillie-ferris-12.jpg"
                alt="Harmony Tower"
              />
              <p>Harmony Tower</p>
            </div>
          </div>
          <button aria-label="Siguiente" className="carousel__siguiente">
            <i className="fas fa-chevron-right" />
          </button>
        </div>
        <div role="tablist" className="carousel__indicadores" />
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        body {
          background: #1d1d1f;
          color: #fff;
          font-family: "Montserrat", sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .contenedor {
          max-width: 1200px;
          width: 90%;
          margin: auto;
        }

        /* --- --- CONTENEDOR PRINCIPAL --- --- */

        .contenido-principal {
          margin-bottom: 50px;
          display: flex;
          align-items: center;
        }

        .contenido-principal__imagen {
          vertical-align: top;
          margin-right: 20px;
          width: 50%;
          max-width: 550px;
        }

        .contenido-principal__contenedor {
          width: 50%;
        }

        .contenido-principal__titulo {
          font-weight: normal;
          font-size: 28px;
        }

        .contenido-principal__resumen {
          font-family: "Open Sans", sans-serif;
          line-height: 30px;
          color: #cfcfcf;
        }

        /* --- --- CAROUSEL --- --- */
        .carousel__contenedor {
          position: relative;
        }

        .carousel__anterior,
        .carousel__siguiente {
          position: absolute;
          display: block;
          width: 30px;
          height: 30px;
          border: none;
          top: calc(50% - 35px);
          cursor: pointer;
          line-height: 30px;
          text-align: center;
          background: none;
          color: #fff;
          opacity: 20%;
        }

        .carousel__anterior:hover,
        .carousel__siguiente:hover {
          opacity: 100%;
        }

        .carousel__anterior {
          left: -30px;
        }

        .carousel__siguiente {
          right: -30px;
        }

        .carousel__lista {
          overflow: hidden;
        }

        .carousel__indicadores .glider-dot {
          display: block;
          width: 30px;
          height: 4px;
          background: #fff;
          opacity: 0.2;
          border-radius: 0;
        }

        .carousel__indicadores .glider-dot:hover {
          opacity: 0.5;
        }

        .carousel__indicadores .glider-dot.active {
          opacity: 1;
        }

        @media screen and (max-width: 800px) {
          body {
            padding: 40px 0;
          }

          .contenido-principal {
            flex-direction: column;
          }

          .contenido-principal > * {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
