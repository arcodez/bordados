function CardItem({
  img = "https://colormake.com/wp-content/uploads/2014/08/gorras.png",
  title = "Gorras",
}) {
  return (
    <div className="card__item">
      <div className="card_img">
        <img src={img} alt={title} className="image" />
        <div className="lazo">
          <p>{title}</p>
        </div>
        <div className="overlay">{title}</div>
      </div>

      <div className="text">
        {/* <h3 className="card__title">{title}</h3> */}
        <p className="card__paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          ab!
        </p>
      </div>

      <style jsx>{`
        .card_img {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          width: 100%;
          border-radius: 10px;
          /* background: var(--noche-clarac); */
          margin-bottom: 20px;
          background: #1da1f250;
        }

        img {
          width: 300px;
        }

        .card_img:hover img {
          filter: blur(8px);
        }

        .lazo {
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
          position: absolute;
          left: -5.5em;
          top: 1em;
          color: #fff;
          font-size: 13px;
          font-weight: bold;
          width: 20em;
          text-align: center;
          text-transform: uppercase;
          background: green;
          box-shadow: 2px 2px 10px rgb(0 0 0 / 50%);
          z-index: 2;
          line-height: 2.5em;
        }

        .overlay {
          /* background-color: rgba(0,0,0, .8); */
          height: 0;
          border-radius: 10px;
          position: absolute;
          width: 100%;
          background: #1da1f250;
          text-align: center;
          font-size: 40px;
          font-family: "Open Sans";
          text-transform: uppercase;
          z-index: 1;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 1s all;
        }

        .card__item:hover .overlay {
          height: 100%;
        }

        .card__item {
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
          transition: 1s all;
        }

        .text {
          border-radius: 10px;
          background: green;
          background: var(--noche-clarac);
          padding: 0 10px;
        }

        .card__title {
          margin: 20px 0;
          font-size: 1.5rem;
          text-align: center;
        }

        .card__paragraph {
          font-weight: 300;
          text-align: justify;
          padding: 0 10px;
          /* margin-bottom: 20px; */
        }

        .card__item:nth-last-of-type(1) {
          grid-area: card1;
        }
        .card__item:nth-last-of-type(2) {
          grid-area: card2;
        }
        .card__item:nth-last-of-type(3) {
          grid-area: card3;
        }
        .card__item:nth-last-of-type(4) {
          grid-area: card4;
        }
      `}</style>
    </div>
  );
}

export function Cards() {
  return (
    <section className="card">
      <div className="container">
        <div className="titles">
          <h3 className="sub_title">Solo el diseño</h3>
          <h2>Tenemos los productos</h2>
        </div>
        <div className="card__container">
          <CardItem />
          <CardItem
            img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/c0b38a3a-ac58-42a6-95c9-9ebc7541a4fc/dcnuqbw-7222ee63-2654-4cdc-9460-84ddbcd869dc.png"
            title="Franelas"
          />
          <CardItem
            img="https://suministrales.com/wp-content/uploads/2019/11/Camisas-en-Oxford-Hombre-y-Mujer-copia.png"
            title="Camisas"
          />
          <CardItem
            img="https://colormake.com/wp-content/uploads/2020/02/taza-de-ceramica-tipo-peltre.png"
            title="Tazas"
          />
        </div>
      </div>

      <style jsx>{`
        .card {
          /* background: #f2f2f2; */
        }

        .titles {
          text-align: center;
        }

        .sub_title {
          color: var(--azul);
          text-transform: uppercase;
        }

        .card__container {
          width: 99%;
          margin: 0 auto;
          margin-top: 60px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(4, 1fr);
          gap: 20px;
          grid-template-areas:
            ".     card1  .    "
            "card2 card1  card3"
            "card2 card4  card3"
            ".     card4  .    ";
        }

        @media screen and (max-width: 768px) {
          /* Cards */

          .card__container {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(5, 1fr);
            gap: 15px;
            grid-template-areas:
              "card1     ."
              "card1 card2"
              "card3 card2"
              "card3 card4"
              ".     card4";
          }
        }

        @media screen and (max-width: 500px) {
          .card__container {
            width: 97%;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4, 1fr);
            grid-template-areas:
              "card1"
              "card2"
              "card3"
              "card4";
          }
        }
      `}</style>
    </section>
  );
}
