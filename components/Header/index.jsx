import { useEffect } from "react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="text">
        <h1>
          Bordados <span>Arcodez</span>
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
          iure. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolores et culpa possimus unde dicta vel perferendis quasi architecto
          .
        </p>
      </div>

      <div className="box">
        <div className="card_container">
          <div className="card">Primera parte</div>
          <div className="card"> Segunda Parte</div>
        </div>
      </div>

      <style jsx>{`
        .header {
          width: 90%;
          margin: auto;
          left: 0;
          right: 0;
        }

        .header span {
          color: var(--azul);
        }
        .text {
          text-align: center;
          width: 30%;
          margin: auto;
          padding-bottom: 10px;
        }

        .box {
          min-height: 300px;
          /* height: 400px; */
          padding: 20px;
          border-radius: 20px;
          background: #2193b0; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #6dd5ed,
            #2193b0
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #6dd5ed,
            #2193b0
          ); /* W3C, IE 10+/Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          box-shadow: var(--shadow);
        }

        .card_container {
          display: flex;
          justify-content: center;
          text-align: center;
        }

        .card {
          height: 300px;
          width: 45%;
          margin: 20px;
          border-radius: 20px;
          background-color: var(--noche-clara);
        }

        @media screen and (max-width: 780px) {
          .text {
            width: 90%;
          }
        }

        @media screen and (max-width: 580px) {
          .card_container {
            flex-wrap: wrap;
          }

          .card {
            width: 90%;
            margin: 10px 0;
          }
        }
      `}</style>
    </div>
  );
};
