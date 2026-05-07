import { useRef } from "react";
import { dineoutData } from "../utils/DineData";
import DineCard from "./DineCard";

const Dineoption = () => {

  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -600,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 600,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-[85%] mx-auto mt-16">

      {/* Heading + Arrows */}
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-2xl font-bold">
          Discover best restaurants on Dineout
        </h1>

        <div className="flex gap-3">

          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            ←
          </button>

          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            →
          </button>

        </div>

      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-3 no-scrollbar"
      >
        {dineoutData.map((RestData) => (
          <DineCard key={RestData.id} RestData={RestData} />
        ))}
      </div>

    </div>
  );
};

export default Dineoption;