import GroceryItemList from "./GroceryItemList";

function Page() {
  return (
    <main className="min-h-screen bg-black p-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-3 text-left text-white">
          Shopping List
        </h1>

        <GroceryItemList />
      </div>
    </main>
  );
}

export default Page;
