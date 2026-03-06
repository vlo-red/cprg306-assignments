"use client";

import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./item-list"
import NewItem from "./NewItem"

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  return (
    <main className="min-h-screen bg-gray-700 p-8 flex flex-col items-center gap-6">

      <h1 className="text-3xl font-bold">
        Week 7 - Shopping List
      </h1>

      <NewItem onAddItem={handleAddItem} />

      <ItemList items={items} />
    </main>
  );
}