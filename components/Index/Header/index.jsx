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
          <div className="card">
            <div className="sub_card">
              <img
                src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_180094648_118134.jpg"
                alt=""
              />
              <p>Vuelve realidad todas tus ideas </p>
            </div>
          </div>

          <div className="card">
            <div className="sub_card">
              <i className="fas fa-check-circle"></i>
              <h3>Tu producto Asegurado</h3>
              <p>Entregas Directas</p>
            </div>
            <div className="sub_card">
              <h3>Los mejores precios de todos</h3>
              <div className="precios">
                <div className="precio">5 $</div>
                <div className="precio">10 $</div>
                <div className="precio">15 $</div>
              </div>
            </div>
            <div className="sub_card">
              <i className="far fa-thumbs-up"></i>
              <h3>El mejor servicio Garantizado</h3>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .header {
          overflow: hidden;
          width: 90%;
          margin: auto;
          left: 0;
          right: 0;
          padding: 10px;
        }

        .header span {
          color: var(--azul);
        }
        .text {
          text-align: center;
          width: 30%;
          margin: auto;
          padding-bottom: 10px;
          animation: textAnimated 2s;
        }

        @keyframes textAnimated {
          0% {
            transform: translateY(-400%);
          }
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
          min-height: 200px;
          min-width: 45%;
          width: 90%;
          margin: 20px;
          border-radius: 20px;
          /* background-color: var(--noche-clara); */
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .card img {
          width: 100%;
          border-radius: 20px;
        }

        .sub_card {
          background: var(--noche-clara);
          border-radius: 20px;
          width: 100%;
          margin: 10px auto;
          padding: 10px;
        }

        .card:nth-child(1) {
          animation: imageAnimation 2s;
          transition: 2s all;
        }

        .card:nth-child(2) {
          animation: imageAnimation2 2s;
          transition: 2s all;
        }

        @keyframes imageAnimation {
          0% {
            transform: translate(-300%);
          }
        }
        @keyframes imageAnimation2 {
          0% {
            transform: translate(300%);
          }
        }

        .precios {
          display: flex;
          padding: 10px;
        }

        .precio {
          width: 33.33%;
          font-weight: bold;
          font-size: 18px;
        }

        .sub_card i {
          color: #22f322;
          font-size: 40px;
        }
        @media screen and (max-width: 780px) {
          .text {
            width: 90%;
          }
          .card_container {
            flex-wrap: wrap;
          }
        }

        @media screen and (max-width: 580px) {
          .card {
            width: 90%;
            margin: 10px 0;
          }
        }
      `}</style>
    </div>
  );
};
