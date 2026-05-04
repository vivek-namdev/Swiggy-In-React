import { dineoutData } from "../utils/DineData";
import DineCard from "./DineCard";

const Dineoption = () => {
  return (
    <div className="w-[85%] mx-auto mt-16">
      
      <h1 className="text-2xl font-bold mb-4">
        Discover best restaurants on Dineout
      </h1>

      <div className="flex gap-4 overflow-x-auto scroll-smooth pb-3 no-scrollbar">
        {dineoutData.map((RestData) => (
          <DineCard key={RestData.id} RestData={RestData} />
        ))}
      </div>

    </div>
  );
};

export default Dineoption;