import { useReducer } from "react";
import { TYPES } from "../../../actions/shoppingAction";
import {
  initialShoppingState,
  ShoppingReducer,
} from "../../../reducers/shoppingReducer";
import { CartItem } from "../CartItem";
import { ProductItem } from "../ProductItem";

export function ShoppingCart() {
  const [state, dispatch] = useReducer(ShoppingReducer, initialShoppingState);
  const { products, cart } = state;

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

      <h3>Carrito</h3>

      <button onClick={clearCart}>Limpiar Carrito</button>
      <article className="box">
        {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
      </article>

      <style jsx>{`
        /* .products {
          display: flex;
          flex-direction: column;
        } */
        .box {
          display: flex;
        }

        @media screen and (max-width: 800px) {
          .box {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          }
        }
      `}</style>
    </div>
  );
}
