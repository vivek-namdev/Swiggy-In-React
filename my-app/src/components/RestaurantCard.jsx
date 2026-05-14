// components/RestaurantCard.jsx

import { Star } from "lucide-react";

const RestaurantCard = ({ restaurant }) => {

  const info = restaurant?.info;

  return (

    <div className="min-w-[320px] max-w-[320px] cursor-pointer hover:scale-95 transition duration-300">

      {/* IMAGE SECTION */}
      <div className="relative">

        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.cloudinaryImageId}`}
          alt={info.name}
          className="w-full h-[220px] object-cover rounded-3xl"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-3xl" />

        {/* OFFER TEXT */}
        <h2 className="absolute bottom-4 left-4 text-white text-3xl font-extrabold">

          {info?.aggregatedDiscountInfoV3?.header}{" "}

          {info?.aggregatedDiscountInfoV3?.subHeader}

        </h2>

      </div>

      {/* CONTENT */}
      <div className="pt-4 px-2">

        {/* RESTAURANT NAME */}
        <h1 className="text-2xl font-bold truncate">
          {info.name}
        </h1>

        {/* RATING SECTION */}
        <div className="flex items-center gap-2 mt-2">

          {/* STAR ICON */}
          <div className="bg-green-700 text-white p-1 rounded-full">

            <Star size={14} fill="white" />

          </div>

          {/* RATING */}
          <span className="font-bold text-lg">
            {info.avgRatingString}
          </span>

          {/* DELIVERY TIME */}
          <span className="font-semibold text-gray-600">
            • {info.sla?.slaString}
          </span>

        </div>

        {/* CUISINES */}
        <p className="text-gray-500 mt-2 truncate text-lg">

          {info.cuisines.join(", ")}

        </p>

        {/* LOCATION */}
        <p className="text-gray-500 truncate text-lg">

          {info.areaName}

        </p>

      </div>

    </div>

  );
};

export default RestaurantCard;