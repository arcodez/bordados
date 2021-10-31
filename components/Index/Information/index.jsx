import React from "react";

export const Information = () => {
  return (
    <div className="information">
      <div className="info_section container">
        <div className="title">
          <h2>¿Que es la serigrafia?</h2>
          <div className="title-image">
            <img
              src="https://lh3.googleusercontent.com/proxy/2DAWkGYgTCghdwCwg4aTsW_DtuZSkoeiHnl5iWLphTRRgkDzlhV-RDnPy_MZsAidNulLbKuSGZoeHo3OhgP_-QGP92wNokw8AszIsMYK_dXOMeuUfWaE"
              alt=""
            />
          </div>
        </div>
        <div className="info">
          <h3>
            <b>La serigrafia</b>
          </h3>
          <p>
            La serigrafía es una técnica de impresión en el método de
            reproducción de documentos e imágenes sobre cualquier material, y
            consiste en transferir una tinta a través de una malla tensada en un
            marco.
          </p>
        </div>
      </div>

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

        .info_section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: var(--noche-clara);
          border-radius: 10px;
        }

        .title,
        .info {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .title h2 {
          border-bottom: 4px solid var(--azul);
          font-size: 40px;
          padding: 10px 0;
          margin: 10px 0;
        }
        .info {
          background: var(--noche-clarac);
          border-radius: 0 10px 10px 0;
          /* border-top-right-radius: 10px; */
          padding: 0 20px;
        }

        .info h3 {
          font-size: 20px;
          text-transform: uppercase;
          border-bottom: 4px solid var(--azul);
        }

        .info p {
          font-size: 20px;
          text-align: justify;
        }

        .title-image {
          align-items: center;
          display: flex;
          width: 80%;
          justify-content: center;
          padding-top: 0;
          padding-bottom: 20px;
        }
        .title-image img {
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
};
