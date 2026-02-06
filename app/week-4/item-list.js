import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const groupedItems = items.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
    return groups;
  }, {});

  return (
    <div className="w-full max-w-md">
      {Object.entries(groupedItems)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([category, itemsArray]) => (

          <div key={category} className="mb-6">

            <h2 className="text-xl font-bold mb-2 capitalize">
              {category}
            </h2>

            <ul className="p-4 w-full">
              {itemsArray.map((item) => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
            </ul>

          </div>

        ))}
    </div>
  );
}
