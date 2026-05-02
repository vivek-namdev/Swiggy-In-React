import { imageGridCards } from "../utils/FoodData";
import FoodCard from "./FoodCard";

const FoodOption = () => {
  return (
    <div className="w-[80%] mx-auto flex flex-wrap mt-10">
      {
      imageGridCards.map((foodData) => <FoodCard key={foodData.id} foodData={foodData}></FoodCard>)
      }
    </div>
  )
}

export default FoodOption
