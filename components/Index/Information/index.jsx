import React from "react";
import { data } from "./data";

const InfoSection = ({
  img = "https://www.serigrafiaiorgi.com/wp-content/uploads/serigrafia-iorgi-serigrafia-digital.jpg",
  quest = "¿Que es la serigrafia?",
  desc = `La serigrafía es una técnica de impresión en el método de reproducción de documentos e imágenes sobre cualquier material, y consiste en transferir una tinta a través de una malla tensada en un marco.`,
  title = "la serigrafia",
  changeOrder = false,
}) => (
  <div className="info_section container">
    <div className="title">
      <h2>{quest}</h2>
      <div className="title-image">
        <img src={img} alt={title} />
      </div>
    </div>

    <div className="info">
      <h3>
        <b>{title}</b>
      </h3>
      <p>{desc}</p>
    </div>

    <style jsx>{`
      .info_section {
        border-radius: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
      }

      .bg {
        background: var(--noche-clara);
      }

      .bg2 {
        background: var(--noche-clarac);
        border-radius: 0 10px 10px 0;
      }

      .title,
      .info {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .title h2 {
        border-bottom: 4px solid var(--noche-clarac);
        font-size: 40px;
        padding: 10px 0;
        margin: 10px 0;
      }

      .info {
        /* border-top-right-radius: 10px; */
        order: ${changeOrder && "-1"};
        padding: 0 20px;
      }

      .info h3 {
        border-bottom: 4px solid var(--noche-clarac);
        font-size: 20px;
        text-transform: uppercase;
      }

      .info p {
        background: var(--noche-clarac);
        border-radius: 10px;
        box-shadow: var(--shadow);
        font-size: 20px;
        padding: 16px;
        text-align: justify;
      }

      .title-image {
        align-items: center;
        display: flex;
        justify-content: center;
        padding-top: 0;
        padding-bottom: 20px;
        width: 80%;
      }
      .title-image img {
        border-radius: 20px;
        width: 100%;
      }

      @media screen and (max-width: 992px) {
        .title {
          order: -2;
        }
        .info_section {
          grid-template-columns: 1fr;
        }
        .title-image {
          width: 70%;
        }
      }

      @media screen and (max-width: 576px) {
        .title h2 {
          font-size: 30px;
        }
      }
    `}</style>
  </div>
);

export const Information = () => {
  return (
    <div className="information">
      {/* <InfoSection />
      <InfoSection changeOrder /> */}

      {data.map((item, index) => (
        <InfoSection {...item} key={index} changeOrder={!index % 2 === 0} />
      ))}

      <style jsx>{`
        .information {
          background: #2193b0;
          background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);
          background: linear-gradient(to right, #6dd5ed, #2193b0);
          box-shadow: var(--shadow);
          margin: 20px 0;
          min-height: 400px;
          width: 100%;
          padding: 40px 0;
        }
      `}</style>
    </div>
  );
};
