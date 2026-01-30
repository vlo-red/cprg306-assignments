function Item({ name, quantity, category }) {
  return (
    <li className="p-4 mb-2 bg-black border-2 border-white">
      <p className="text-lg font-semibold text-pink-500">{name}</p>
      <p className="text-sm text-blue-400">Category: {category}</p>
      <p className="text-sm font-medium text-blue-400">Quantity: {quantity}</p>
    </li>
  );
}

export default Item;
