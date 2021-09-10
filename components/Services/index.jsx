import styles from "./Services.module.css";

const ServiceCard = ({ desc = "", icono = "" }) => (
  <div className="services_card">
    <i className={icono || "fas fa-fill-drip"}></i>
    <p>{desc || "Lorem ipsum dolor sit."}</p>
    <div className="card_button">
      <button className="button">Ver ejemplos</button>
    </div>

    <style jsx>{`
      i {
        font-size: 40px;
      }

      .button {
        border: none;
        border-radius: 20px;
        padding: 10px 20px;
        background: var(--azul);
        color: var(--blanco);
        /* font-size: 18px; */
      }
      .services_card {
        width: 20%;
        margin: 20px;
        padding: 10px 0;
        border-radius: 20px;
        background: var(--noche-clarac);
        box-shadow: var(--shadow);
      }
      .services_card p {
        font-size: 20px;
      }

      @media screen and (max-width: 780px) { 
        .services_card {
          width: 40%;
        }
      }

      @media screen and (max-width: 576px) {
        .services_card {
          width: 100%;
        }
      }
    `}</style>
  </div>
);

export const Services = () => {
  return (
    <div className="services">
      <div className="titles">
        <h3 className="sub_title_services">Sencillo y Rapido</h3>
        <h2>Deja las complicaciones de lado</h2>
      </div>

      <div className="services_cards">
        <ServiceCard desc="Estampados" />
        <ServiceCard desc="Bordados" icono={"fas fa-graduation-cap"} />
        <ServiceCard desc="Sublimacion" icono={"far fa-images"} />
        <ServiceCard desc="Serigrafia" icono={"fas fa-brush"} />
      </div>

      <style jsx global>{`
        .services {
          width: 90%;
          justify-content: center;
          margin: auto;
        }
        .services .titles {
          text-align: center;
        }

        .sub_title_services {
          color: var(--azul);
          text-transform: uppercase;
        }
        .services_cards {
          display: flex;
          flex-wrap: wrap;
          margin: auto;
          justify-content: center;
          text-align: center;
        }
      `}</style>
    </div>
  );
};
