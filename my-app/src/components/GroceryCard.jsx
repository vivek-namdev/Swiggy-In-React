const GroceryCard = ({ foodData }) => {
  return (
    <a
      href={foodData.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-4 flex flex-col items-center text-center hover:scale-105 cursor-pointer">
        
        <img
          className="w-24 h-24 object-contain mb-3"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${foodData.imageId}`}
          alt={foodData.text}
        />

        <h2 className="text-sm font-medium text-gray-700">
          {foodData.text}
        </h2>

      </div>
    </a>
  );
};

export default GroceryCard;