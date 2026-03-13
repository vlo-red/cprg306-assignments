"use client";

import { useState, useEffect } from "react";

// Fetch meals from TheMealDB
async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      if (!ingredient) return;
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    }

    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="w-full max-w-md mt-6">
      <h2 className="text-xl font-semibold mb-3">
        Meal Ideas {ingredient ? `for ${ingredient}` : ""}
      </h2>

      {ingredient ? (
        meals && meals.length > 0 ? (
          <ul className="space-y-2">
            {meals.map((meal) => (
              <li key={meal.idMeal} className="bg-black p-3 rounded-md border">
                {meal.strMeal}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-200 italic">No meals found...</p>
        )
      ) : (
        <p className="text-gray-200 italic">Select an item to see meal ideas~</p>
      )}
    </div>
  );
}