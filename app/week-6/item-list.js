"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  // State for sorting
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="w-full max-w-md">

      {/* Sort Buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded-md transition ${sortBy === "name"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-black"
            }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded-md transition ${sortBy === "category"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-black"
            }`}
        >
          Sort by Category
        </button>
      </div>

      <ul className="w-full">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>

    </div>
  );
}