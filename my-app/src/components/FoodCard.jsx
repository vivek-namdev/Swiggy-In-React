const FoodCard = ({ foodData }) => {
  return (
    <>
    <a  target="_blank" href={foodData.link}>
      <img className="w-36 h-45"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${foodData.imageId}`} 
        alt="food"
      />
      </a>
    </>
  );
};

export default FoodCard;