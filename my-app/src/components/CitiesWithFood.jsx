import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const CitiesWithFood = () => {
  const [showAll, setShowAll] = useState(false);

  const cities = [
    "Bangalore", "Gurgaon", "Hyderabad", "Delhi", "Mumbai", "Pune",

    "Kolkata", "Chennai", "Ahmedabad", "Chandigarh", "Jaipur", "Lucknow",

    "Nagpur", "Indore", "Bhopal", "Noida", "Ghaziabad", "Faridabad",

    "Patna", "Ranchi", "Surat", "Vadodara", "Rajkot", "Nashik",

    "Aurangabad", "Amritsar", "Ludhiana", "Jalandhar", "Dehradun", "Haridwar",

    "Agra", "Kanpur", "Varanasi", "Prayagraj", "Meerut", "Aligarh",

    "Gwalior", "Jabalpur", "Raipur", "Bilaspur", "Bhubaneswar", "Cuttack",

    "Visakhapatnam", "Vijayawada", "Mysore", "Mangalore", "Coimbatore", "Madurai",

    "Trichy", "Salem", "Tirunelveli", "Kochi", "Trivandrum", "Kozhikode",

    "Udaipur", "Jodhpur", "Ajmer", "Shimla", "Srinagar"
  ];

  const visibleCities = showAll ? cities : cities.slice(0, 11);

  return (
    <section className="w-full bg-[#f7f7f7] py-12 flex justify-center">
      
      <div className="w-[95%]">
        
        {/* Heading */}
        <h1 className="text-[34px] font-extrabold text-[#1c1c1c] mb-8">
          Cities with food delivery
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-5">

          {visibleCities.map((city, index) => (
            <div
              key={index}
              className="h-[64px] border border-gray-300 rounded-2xl bg-white flex items-center justify-center cursor-pointer hover:shadow-sm transition"
            >
              <p className="text-[18px] font-medium text-gray-700">
                Order food online in {city}
              </p>
            </div>
          ))}

          {/* Toggle Button */}
          <button
            onClick={() => setShowAll(!showAll)}
            className="h-[64px] border border-gray-300 rounded-2xl bg-white flex items-center justify-center gap-2 text-[#ff5200] font-bold text-[18px] hover:bg-orange-50 transition"
          >
            {showAll ? "Show Less" : "Show More"}

            {showAll ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CitiesWithFood;