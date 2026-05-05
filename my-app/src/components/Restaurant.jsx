import RestCard from "./RestCard";
import { restaurants } from "../utils/RestData";

const Restaurant = () => {

  const restData = restaurants;

  return (
    <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
      {
        restData.length > 0 ? (
          restData.map((restInfo) => (
            <RestCard key={restInfo.info.id} restInfo={restInfo} />
          ))
        ) : (
          <p>Loading...</p>
        )
      }
    </div>
  );
};

export default Restaurant;