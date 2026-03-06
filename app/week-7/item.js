export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-white rounded-2xl p-4 mb-3 border border-blue-800 hover:shadow-lg transition">

      <h2 className="text-lg font-semibold text-teal-600">
        {name}
      </h2>

      <p className="text-sm text-gray-700">
        Quantity: <span className="font-medium">{quantity}</span>
      </p>

      <p className="text-sm text-gray-700">
        Category: <span className="font-medium">{category}</span>
      </p>
    </li>
  );
}