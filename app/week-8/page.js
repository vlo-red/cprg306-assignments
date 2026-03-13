"use client";

import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  // Clean item name and remove emojis
  const handleItemSelect = (item) => {
    let cleanedName = item.name
      .split(",")[0] // remove quantity like ", 1 kg"
      .replace(/[\p{Emoji_Presentation}\p{Emoji}\u200d]+/gu, "") // remove all emojis
      .trim();

    setSelectedItemName(cleanedName);
  };

  return (
    <main className="min-h-screen bg-gray-700 p-8">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Week 8 - Shopping List + Meal Ideas
      </h1>

      <div className="flex gap-10 justify-center">

        <div className="flex flex-col gap-6">
          <NewItem onAddItem={handleAddItem} />

          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <MealIdeas ingredient={selectedItemName} />
      </div>

    </main>
  );
}