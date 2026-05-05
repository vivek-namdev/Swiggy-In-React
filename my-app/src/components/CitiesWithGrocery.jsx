import { useState } from "react";

const CitiesWithGrocery = () => {
  const [showAll, setShowAll] = useState(false);

  const cities = [
    "Bangalore", "Gurgaon", "Hyderabad", "Delhi",
    "Mumbai", "Pune", "Kolkata", "Chennai",
    "Ahmedabad", "Chandigarh", "Jaipur",
    "Lucknow", "Indore", "Nagpur", "Surat"
  ];

  const visibleCities = showAll ? cities : cities.slice(0, 11);

  return (
    <div className="mt-15 max-w-6xl mx-auto px-4 mb-15">
      <h2 className="text-xl font-bold mb-6">
        Cities with grocery delivery
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {visibleCities.map((city, index) => (
          <a
            key={index}
            href={`https://www.swiggy.com/instamart/city/${city.toLowerCase()}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border rounded-xl py-4 text-center hover:shadow cursor-pointer hover:bg-gray-50 transition">
              Order grocery delivery in {city}
            </div>
          </a>
        ))}

        {/* Show More Button */}
        <div
          onClick={() => setShowAll(!showAll)}
          className="border rounded-xl py-4 text-center cursor-pointer text-orange-500 font-semibold hover:bg-gray-50 transition"
        >
          {showAll ? "Show Less ▲" : "Show More ▼"}
        </div>
      </div>
    </div>
  );
};

export default CitiesWithGrocery;