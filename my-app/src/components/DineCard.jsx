const DineCard = ({ RestData }) => {
  const getImageUrl = (img) => {
    if (!img) return "";
    if (img.startsWith("http")) return img;
    return `https://media-assets.swiggy.com/swiggy/image/upload/${img}`;
  };

  return (
    <a
      href={RestData?.url}
      target="_blank"
      rel="noopener noreferrer"
      className="min-w-[260px] mr-5 flex-shrink-0"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
        
        <img
          className="w-full h-44 object-cover"
          src={getImageUrl(RestData?.image)}
          alt={RestData?.name}
        />

        <div className="p-3">
          <h2 className="font-semibold text-lg truncate">
            {RestData?.name}
          </h2>

          <p className="text-sm text-gray-600">
            ⭐ {RestData?.rating} • {RestData?.costForTwo}
          </p>

          <p className="text-xs text-gray-500 truncate">
            {RestData?.cuisines?.join(", ")}
          </p>

          <p className="text-xs text-gray-400 mt-1">
            {RestData?.location}
          </p>

          <p className="text-green-600 text-sm font-medium mt-2">
            {RestData?.offer}
          </p>
        </div>

      </div>
    </a>
  );
};

export default DineCard;