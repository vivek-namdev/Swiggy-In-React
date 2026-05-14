import { useEffect, useRef, useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import RestaurantCard from "./RestaurantCard";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  const scrollRef = useRef(null);

  // FETCH DATA
  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4894154&lng=77.01186960000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await res.json();

      const data =
        json?.data?.cards
          ?.find(
            (card) =>
              card?.card?.card?.id ===
              "top_brands_for_you"
          )
          ?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setRestaurants(data || []);

    } catch (error) {
      console.log(error);
    }
  };

  // USE EFFECT
  useEffect(() => {
    fetchData();
  }, []);

  // LEFT SCROLL
  const handleLeftScroll = () => {
    scrollRef.current.scrollBy({
      left: -600,
      behavior: "smooth",
    });
  };

  // RIGHT SCROLL
  const handleRightScroll = () => {
    scrollRef.current.scrollBy({
      left: 600,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-[90%] mx-auto py-12">

      {/* TOP SECTION */}
      <div className="flex items-center justify-between mb-10">

        {/* HEADING */}
        <h1 className="text-5xl font-extrabold">
          Top Restaurants near you
        </h1>

        {/* BUTTONS */}
        <div className="flex items-center gap-4">

          {/* LEFT BUTTON */}
          <button
            onClick={handleLeftScroll}
            className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition"
          >
            <ChevronLeft size={24} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={handleRightScroll}
            className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition"
          >
            <ChevronRight size={24} />
          </button>

        </div>
      </div>

      {/* SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
      >

        {restaurants.map((restaurant) => (

          <RestaurantCard
            key={restaurant.info.id}
            restaurant={restaurant}
          />

        ))}

      </div>

    </section>
  );
};

export default RestaurantList;