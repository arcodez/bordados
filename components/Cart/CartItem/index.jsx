export function CartItem({ data, delFromCart }) {
  let { id, name, price, quantity } = data;
  return (
    <div>
      <h4>{name}</h4>
      <h5>
        {price}.00 x {quantity} = ${price * quantity}.00
      </h5>

      <button onClick={() => delFromCart(id)}>Eliminar Uno</button>
      <br />
      <button onClick={() => delFromCart(id, true)}>Eliminar Todos</button>
      <br />
      <br />
      <style jsx>{`
        div {
          margin: 10px auto;
          background: red;
        }
      `}</style>
    </div>
  );
}
