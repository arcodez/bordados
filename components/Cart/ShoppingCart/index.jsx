import { useEffect, useReducer, useState } from "react";
import { TYPES } from "../../../actions/shoppingAction";
import {
  initialShoppingState,
  ShoppingReducer,
} from "../../../reducers/shoppingReducer";
import { CartItem } from "../CartItem";
import { ProductItem } from "../ProductItem";

export function ShoppingCart() {
  const [state, dispatch] = useReducer(ShoppingReducer, initialShoppingState);
  const [total, setTotal] = useState(0);
  const { products, cart } = state;

  useEffect(() => {
    setTotal(cart.reduce((acc, el) => acc + el.price * el.quantity, 0));
  }, [cart]);

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div className="container">
      <h2>Carrito de Compra</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive ">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>

      <h3 className="text-center">Carrito</h3>
      <h3>Pedidos en el Carrito {cart.length}</h3>

      <div className="carrito">
        <br />

        <div className="items">
          {cart.map((item, index) => (
            <CartItem
              key={index}
              data={item}
              delFromCart={delFromCart}
              addToCart={addToCart}
            />
          ))}
        </div>

        <div className="total">
          <div className="container">
            <p>Total: </p>
            <h2>{total} $</h2>
            <button onClick={clearCart}>Limpiar Carrito</button>
            <br />
            <button>Pagar</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        p {
          font-size: 18px;
        }

        h2 {
          margin-top: 0;
          font-size: 36px;
        }
        .text-center {
          text-align: center;
          margin-bottom: 10px;
        }
        .carrito {
          display: flex;
          flex-wrap: wrap;
        }

        .box {
          display: flex;
        }

        .items {
          width: 75%;
          flex-direction: column;
          border-radius: 10px;
          padding: 10px;
          background: var(--noche-clarac);
          box-shadow: var(--shadow);
        }

        .total {
          margin-left: 20px;
          width: 20%;
          background: var(--noche-clarac);
          border-radius: 10px;
          box-shadow: var(--shadow);
        }

        button {
          width: 100%;
          padding: 20px;
          border: none;
          border-radius: 5px;
          margin: 5px 0;
          font-weight: bold;
          color: var(--blanco);
          background: var(--noche-clara);
        }

        @media screen and (max-width: 800px) {
          .box {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          }
        }

        @media screen and (max-width: 768px) {
          .carrito {
            flex-wrap: wrap;
          }
          .total {
            width: 100%;
            margin: auto;
            margin-bottom: 20px;
            order: -1;
          }
          .items {
            width: 100%;
            margin: auto;
          }
        }

        @media screen and (max-width: 576px) {
        }
      `}</style>
    </div>
  );
}
