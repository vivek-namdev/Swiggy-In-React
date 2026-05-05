const RestCard = ({ restInfo }) => {
  return (
    <div className="w-56 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
      
      {/* Image */}
      <div className="w-full h-40 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            restInfo.info.cloudinaryImageId
          }
          alt={restInfo.info.name}
        />
      </div>

      {/* Content */}
      <div className="p-3">
        <p className="font-semibold text-gray-800 text-sm truncate">
          {restInfo.info.name}
        </p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-green-600 text-sm font-medium">
            ⭐ {restInfo.info.avgRating}
          </span>

          <span className="text-gray-500 text-xs">
            {restInfo.info.costForTwo || "₹300 for two"}
          </span>
        </div>

        <p className="text-gray-500 text-xs mt-1 truncate">
          {restInfo.info.cuisines?.join(", ")}
        </p>
      </div>

    </div>
  );
};

export default RestCard;