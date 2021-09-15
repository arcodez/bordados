export function ProductItem({ data, addToCart }) {
  let { id, name, price } = data;
  return (
    <div>
      <h4>{name}</h4>
      <h5>$ {price}</h5>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
}
