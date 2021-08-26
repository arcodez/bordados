import { useEffect } from "react";

export function Carousel() {
  useEffect(() => {
    window.addEventListener("load", function () {
      alert("Hola mundo");
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
    <div className="carousel">
      <div className="carousel__contenedor">
        <button aria-label="Anterior" className="carousel__anterior">
          <i className="fas fa-chevron-left" />
        </button>
        <div className="carousel__lista">
          <div className="carousel__elemento">
            <img src="img/2.png" alt="Rock and Roll Hall of Fame" />
            <p>Rock and Roll Hall of Fame</p>
          </div>
          <div className="carousel__elemento">
            <img src="img/3.png" alt="Constitution Square - Tower I" />
            <p>Constitution Square - Tower I</p>
          </div>
          <div className="carousel__elemento">
            <img src="img/4.png" alt="Empire State Building" />
            <p>Empire State Building</p>
          </div>
          <div className="carousel__elemento">
            <img src="img/5.png" alt="Harmony Tower" />
            <p>Harmony Tower</p>
          </div>
          <div className="carousel__elemento">
            <img src="img/6.png" alt="Empire State Building" />
            <p>Empire State Building</p>
          </div>
          <div className="carousel__elemento">
            <img src="img/7.png" alt="Harmony Tower" />
            <p>Harmony Tower</p>
          </div>
          <div className="carousel__elemento">
            <img src="img/8.png" alt="Empire State Building" />
            <p>Empire State Building</p>
          </div>
          <div className="carousel__elemento">
            <img src="img/9.png" alt="Harmony Tower" />
            <p>Harmony Tower</p>
          </div>
        </div>
        <button aria-label="Siguiente" className="carousel__siguiente">
          <i className="fas fa-chevron-right" />
        </button>
      </div>
      <div role="tablist" className="carousel__indicadores" />

      <style jsx>{``}</style>
    </div>
  );
}
