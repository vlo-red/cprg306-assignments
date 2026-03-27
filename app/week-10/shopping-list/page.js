"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../../../contexts/AuthContext.js";
import { useRouter } from "next/navigation";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";
import { getItems, addItem } from "./../_services/shopping-list-service.js";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const { user } = useUserAuth();
  const router = useRouter();

  // Redirect to landing page if not logged in
  useEffect(() => {
    if (!user) {
      router.push("/week-10"); //landing page
    }
  }, [user, router]);

  // loading items from Firestore
  useEffect(() => {
    if (!user) return;

    async function loadItems() {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    }

    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (!user) return;

    const id = await addItem(user.uid, newItem);

    setItems((prev) => [
      ...prev,
      { id, ...newItem },
    ]);
  };

  // Clean item name and remove emojis
  const handleItemSelect = (item) => {
    let cleanedName = item.name
      .split(",")[0] // remove quantity like ", 1 kg"
      .replace(/[\p{Emoji_Presentation}\p{Emoji}\u200d]+/gu, "") // remove all emojis
      .trim();

    setSelectedItemName(cleanedName);
  };

  // If user isn't logged in, render nothing
  if (!user) return null;

  return (
    <main className="min-h-screen bg-gray-700 p-8">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Week 10 - Shopping List + Meal Ideas
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