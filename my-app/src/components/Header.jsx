const Header = () => {
  return (
    <header className="bg-[#ff5200] overflow-hidden">
      
      {/* Navbar */}
      <div className="flex justify-between items-center container mx-auto py-6 px-4">
        <img
          className="w-32 md:w-36 lg:w-40 object-contain"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
          alt=""
        />

        <div className="hidden md:flex items-center gap-6 text-white font-medium text-sm lg:text-base">
          <a
            className="hover:text-gray-200 transition"
            href="https://www.swiggy.com/corporate/"
            target="_blank"
          >
            Swiggy Corporate
          </a>

          <a
            className="hover:text-gray-200 transition"
            href="https://partner.swiggy.com/food/login"
            target="_blank"
          >
            Partner with us
          </a>

          <a
            className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-[#ff5200] transition"
            href="https://partner.swiggy.com/food/login"
            target="_blank"
          >
            Get the App
          </a>

          <a
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            href="https://partner.swiggy.com/food/login"
            target="_blank"
          >
            Sign in
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-20 pb-12 relative text-center">

        {/* Left Image */}
        <img
          className="hidden md:block absolute top-0 left-0 h-[350px] lg:h-[420px]"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt=""
        />

        {/* Right Image */}
        <img
          className="hidden md:block absolute top-0 right-0 h-[350px] lg:h-[420px]"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt=""
        />

        {/* Heading */}
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Order food & groceries. Discover best restaurants. Swiggy it!
          </h1>
        </div>

        {/* Inputs */}
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-4 mt-10 px-4">
          <input
            className="bg-white w-full md:w-[300px] lg:w-[320px] text-lg px-5 py-4 rounded-xl outline-none"
            placeholder="Delhi, India"
          />

          <input
            className="bg-white w-full md:w-[400px] lg:w-[500px] text-lg px-5 py-4 rounded-xl outline-none"
            placeholder="Search for restaurant, item or more"
          />
        </div>
      </div>

      {/* Bottom Cards */}
<div className="container mx-auto flex justify-center gap-8 pb-14 px-4 flex-wrap">

  <a href="https://www.swiggy.com/restaurants" target="_blank">
    <img
      className="w-44 md:w-56 lg:w-64 hover:scale-110 transition duration-300"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
      alt="food"
    />
  </a>

  <a
    href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1"
    target="_blank"
  >
    <img
      className="w-44 md:w-56 lg:w-64 hover:scale-110 transition duration-300"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
      alt="instamart"
    />
  </a>

  <a href="https://www.swiggy.com/dineout" target="_blank">
    <img
      className="w-44 md:w-56 lg:w-64 hover:scale-110 transition duration-300"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
      alt="dineout"
    />
  </a>

</div>
    </header>
  );
};

export default Header;