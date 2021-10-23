export function CartItem({ data, delFromCart, addToCart }) {
  let { id, name, price, quantity } = data;
  return (
    <div className="card-item">
      <div className="image">
        <img
          src="https://i.pinimg.com/564x/08/06/68/080668d46e97693237d3eb79c23baf69.jpg"
          alt="Image Cart Item"
        />
      </div>

      <div className="desc">
        <h4>{name}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit.</p>
      </div>

      <div className="extra">
        <div className="price">
          <h3>Precio: {price} $</h3>
          <h4>Cantidad: {quantity}</h4>
          <h4>{price * quantity} $</h4>
        </div>

        <div className="botones">
          <button onClick={() => addToCart(id)}>Agregar Uno</button>
          <button onClick={() => delFromCart(id)}>Eliminar Uno</button>
          <button onClick={() => delFromCart(id, true)}>Eliminar Todos</button>
        </div>
      </div>

      <style jsx>{`
        .card-item {
          display: flex;
          margin: 0px;
          width: 100%;
          justify-content: space-between;
          border-bottom: 2px solid #fff;
          // flex-wrap: wrap;
        }

        p {
          text-align: justify;
          margin: 0;
          justify-content: start;
        }

        .image {
          margin-left: 5px;
          display: flex;
          width: 200px;
          align-items: center;
        }

        img {
          justify-content: center;
          align-items: center;
          width: 100%;
          margin: auto 0;
          align-content: center;
          object-fit: cover;
          border-radius: 5px;
        }

        .desc {
          flex-direction: column;
          justify-content: start;
          margin-left: 10px;
        }

        .extra {
          margin-right: 20px;
          width: 200px;
          align-items: center;
          justify-content: center;
        }

        .botones {
          display: flex;
          flex-direction: column;
        }

        .botones button {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 5px;
          margin: 5px 0;
          font-weight: bold;
          color: var(--blanco);
          background: var(--noche-clara);
        }

        .price {
          height: 100px;
          text-align: right;
          display: flex;
          text-align: justify;
          align-items: center;
        }
        
        .price h3 {
          margin: 5px;
        }

        .price h4 {
          margin: 5px;
        }

        .price h5 {
          margin: 5px;
        }

        @media screen and (max-width: 1320px) {
          .card-item {
            flex-wrap: wrap;
          }
        }

        @media screen and (max-width: 992px) {
          .container {
            align-items: center;
            justify-content: center;
          }

          .image {
            order: -2;
            margin-top: 10px;
            width: 100%;
          }
          .desc {
            width: 100%;
          }

          .extra {
            margin-top: 10px 0;
            width: 100%;
          }
          .price {
            margin: 0;
            width: 100%;
            display: flex;
            text-align: justify;
            align-items: center;
          }

          .botones button {
            order: 1;
            margin: 0 5px;
            padding: 5px;
          }

          .botones {
            flex-direction: row;
            margin-bottom: 10px;
          }
        }

        @media screen and (max-width: 576px) {
          .container {
            /* flex-wrap: wrap; */
            align-items: center;
            justify-content: center;
          }

          .image {
            order: -2;
            margin-top: 10px;
            width: 100%;
          }

          .desc {
            width: 100%;
          }

          .extra {
            margin-top: 10px 0;
            width: 100%;
          }

          .botones button {
            order: 1;
            margin: 0 5px;
            padding: 5px;
          }

          .botones {
            flex-direction: row;
            margin-bottom: 10px;
          }
        }
      `}</style>
    </div>
  );
}
