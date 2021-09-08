function CardItem({ img = "", title = "" }) {
  return (
    <div className="card__item">
      <figure>
        <img
          src={
            img || "https://colormake.com/wp-content/uploads/2014/08/gorras.png"
          }
          alt=""
        />
        {/* <div className="card__img">
          <img src="" alt="" />
        </div> */}
      </figure>
      <h3 className="card__title">{title || "Gorras"}</h3>
      <p className="card__paragraph">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ab!
      </p>
      <style jsx>{`
        figure img {
          width: 100%;
        }
        .card__item {
          padding: 20px;
          background: var(--noche-clarac);
          border-top: 5px solid var(--azul);
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .card__img {
          background: #ffff;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-top: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card__title {
          margin: 20px 0;
          font-size: 1.5rem;
        }

        .card__paragraph {
          font-weight: 300;
          margin-bottom: 20px;
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

      <style jsx global>{`
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
