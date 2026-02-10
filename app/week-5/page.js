import NewItem from "./NewItem";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Add New Item
        </h1>

        <NewItem />
      </div>
    </main>
  )
}