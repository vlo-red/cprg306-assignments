"use client";

import { useState } from "react";

export default function NewItem() {
  // State
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);

    alert(
      `Added: ${name}, quantity: ${quantity}, category: ${category}`
    );

    // Reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-md space-y-4"
    >
      <div>
        <label className="block mb-1 font-medium">
          Item Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter item name"
          className="w-full p-2 rounded-md bg-white text-black border"
        />
      </div>

      <div className="flex gap-4">

        <div className="flex-1">
          <label className="block mb-1 font-medium">
            Quantity
          </label>

          <div className="flex items-center border rounded-md overflow-hidden bg-white text-black">

            {/* Minus */}
            <button
              type="button"
              onClick={decrement}
              className="px-3 py-2 bg-gray-200 hover:bg-gray-300"
            >
              −
            </button>

            <input
              type="text"
              value={quantity}
              readOnly
              className="w-full text-center p-2 outline-none"
            />

            {/* Plus */}
            <button
              type="button"
              onClick={increment}
              className="px-3 py-2 bg-gray-200 hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>

        {/* Category Dropdown */}
        <div className="flex-1">
          <label className="block mb-1 font-medium">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-md bg-white text-black"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/*  Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 py-2 rounded-md hover:bg-blue-700 transition"
      >
        +
      </button>
    </form>
  );
}
