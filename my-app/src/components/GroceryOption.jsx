import groceryItems from "../utils/Grocery";
import GroceryCard from "./GroceryCard";

const GroceryOption = () => {
  return (
    <div className="max-w-6xl mx-auto mt-16 px-4">
      
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
        Shop Groceries on Instamart
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {groceryItems.map((foodData) => (
          <GroceryCard key={foodData.id} foodData={foodData} />
        ))}
      </div>

    </div>
  );
};

export default GroceryOption;