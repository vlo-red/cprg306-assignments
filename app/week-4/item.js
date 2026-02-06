export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-white rounded-2xl p-4 mb-3 border border-green-600 hover:shadow-lg transition">

      <h2 className="text-lg font-semibold text-green-600">
        {name}
      </h2>

      <p className="text-sm text-amber-600">
        Quantity: <span className="font-medium">{quantity}</span>
      </p>

      <p className="text-sm text-amber-600">
        Category: <span className="font-medium">{category}</span>
      </p>
    </li>
  );
}