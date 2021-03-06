import { useEffect, useState } from "react";
import { useHandleCarousel } from "../../../hooks/useHandleCarousel";
import { CarouselItem } from "./CarouselItem";

export function Carousel({ data = [] }) {
  const [loader, setLoader] = useState(false);
  // const { loader, setLoader } = useHandleCarousel;
  const CarouselConfig = () => {
    setLoader(true);
    window.addEventListener("load", function () {
      setLoader(false);
      new Glider(document.querySelector(".carousel__lista"), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: ".carousel__indicadores",
        draggable: true,
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
              slidesToScroll: 2,
            },
          },
        ],
      });
    });
  };

  useEffect(() => {
    CarouselConfig();
  }, []);

  return (
    <div className="contenedor">
      {loader ? (
        <p>Loading carousel</p>
      ) : (
        <div className="carousel">
          <div className="carousel__contenedor">
            <button aria-label="Anterior" className="carousel__anterior">
              <i className="fas fa-chevron-circle-left" />
            </button>
            <div className="carousel__lista">
              <CarouselItem img="https://i.pinimg.com/736x/7a/34/e5/7a34e5170ce1a3bf02376a22b001167f.jpg" />

              <CarouselItem
                img="https://i.pinimg.com/474x/40/fe/43/40fe43af223a61d8dc515595ff741b1f.jpg"
                name="Maquina De Coser"
              />

              <CarouselItem
                name="Un mundo de Colores"
                img="https://i.pinimg.com/550x/13/45/64/134564f5829b825b6508a19ab5f640f7.jpg"
              />

              <CarouselItem img="https://ae01.alicdn.com/kf/HTB1XHgMKVXXXXXIXFXXq6xXFXXXu/Camiseta-nueva-buena-calidad-hombres-de-bordado-de-la-marca-de-los-hombres-ropa-camisas-de.jpg_q50.jpg" />

              <CarouselItem img="https://ae01.alicdn.com/kf/H7d31ea95881e4ec9a21a7c05c1a435c34/Camiseta-con-estampado-de-letras-Are-you-afraid-of-Dark-para-mujer-tops-holgados-de-verano.jpg_Q90.jpg_.webp" />

              <CarouselItem img="https://cdn.shopify.com/s/files/1/2146/1801/products/dark-2_1ec204cf-a135-4d2b-bd9d-9ffd9f385c8d_900x.jpg?v=1605216999" />

              <CarouselItem img="https://ae01.alicdn.com/kf/H1f2336d9fc734d1caee5324aff5ba730p/Dark-personality-BF-Camiseta-con-estampado-de-dibujos-animados-japoneses-para-mujer-conjunto-de-Harajuku-suelto.jpg_q50.jpg" />
            </div>
            <button aria-label="Siguiente" className="carousel__siguiente">
              <i className="fas fa-chevron-circle-right" />
            </button>
            <div role="tablist" className="carousel__indicadores" />
          </div>
        </div>
      )}
      <style jsx>{`
        .contenedor {
          max-width: 1200px;
          width: 90%;
          margin: 10px auto;
          padding: 10px;
        }

        /* --- --- CAROUSEL --- --- */
        .carousel__contenedor {
          position: relative;
          padding: 20px;
          border-radius: 20px;
          background: #2193b0; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #6dd5ed,
            #2193b0
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #6dd5ed, #2193b0);
          box-shadow: 0 0 20px #6dd5ed;
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
          color: #000000;
          opacity: 60%;
          z-index: 10;
          font-size: 20px;
        }

        .carousel__anterior:hover,
        .carousel__siguiente:hover {
          opacity: 100%;
        }

        .carousel__anterior {
          left: 1px;
        }

        .carousel__siguiente {
          right: 1px;
        }

        .carousel__lista {
          overflow: hidden;
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
