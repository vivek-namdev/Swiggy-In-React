// components/Header.jsx

import {
  ArrowUpRight,
  ChevronDown,
  MapPin,
  Search,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    title: "FOOD DELIVERY",
    subtitle: "FROM RESTAURANTS",
    offer: "UPTO 60% OFF",
    image:
      "https://media-assets.swiggy.com/portal/testing/seo-home/Food3BU.png",
  },

  {
    title: "INSTAMART",
    subtitle: "INSTANT GROCERY",
    offer: "UPTO 60% OFF",
    image:
      "https://media-assets.swiggy.com/portal/testing/seo-home/Genie3BU.png",
  },

  {
    title: "DINEOUT",
    subtitle: "EAT OUT & SAVE MORE",
    offer: "UPTO 50% OFF",
    image:
      "https://media-assets.swiggy.com/portal/testing/seo-home/Dineout.png",
  },
];

const Header = () => {
  return (
    <section className="bg-[#ff5200] relative overflow-hidden min-h-screen">
      
      {/* ================= NAVBAR ================= */}
      <nav className="px-14 py-5 flex items-center justify-between relative z-20">
        
        {/* Logo */}
        <a className="flex items-center gap-3">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_800,h_800/portal/m/logo_192x192.png"
            alt="Swiggy Logo"
            className="w-14 h-14 object-contain"
          />

          <h1 className="text-white text-[34px] font-bold leading-none">
            Swiggy
          </h1>
        </a>

        {/* Right Links */}
        <div className="flex items-center gap-10">
          
          <a
            href="https://www.swiggy.com/corporate/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold text-[17px] hover:text-gray-200 transition"
          >
            Swiggy Corporate
          </a>

          <a
            href="https://partner.swiggy.com/login#/swiggy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold text-[17px] hover:text-gray-200 transition"
          >
            Partner with us
          </a>

          <a
            href="https://www.swiggy.com/app-download"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white px-7 py-4 rounded-2xl flex items-center gap-2 font-semibold hover:bg-white hover:text-[#ff5200] transition duration-300"
          >
            Get the App
            <ArrowUpRight size={20} />
          </a>

          <a
            href="https://www.swiggy.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-10 py-4 rounded-2xl font-semibold hover:bg-gray-900 transition"
          >
            Sign in
          </a>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}

      {/* Left Image */}
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
        alt="Veggies"
        className="absolute left-0 top-28 w-[250px]"
      />

      {/* Right Image */}
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
        alt="Sushi"
        className="absolute right-0 top-28 w-[250px]"
      />

      {/* Hero Content */}
      <div className="w-[55%] mx-auto flex flex-col items-center pt-10 relative z-10">
        
        <h1 className="text-white text-5xl font-extrabold text-center leading-[1.2]">
          Order food & groceries.
          <br />
          Discover best restaurants.
          <br />
          Swiggy it!
        </h1>

        {/* Search Section */}
        <div className="flex gap-5 mt-12 w-full justify-center">
          
          {/* Location Box */}
          <div className="bg-white w-[340px] h-16 rounded-2xl flex items-center px-5 justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <MapPin className="text-[#ff5200]" />

              <span className="text-gray-700 font-medium text-lg">
                Karol Bagh, New Delhi
              </span>
            </div>

            <ChevronDown />
          </div>

          {/* Search Box */}
          <div className="bg-white w-[500px] h-16 rounded-2xl flex items-center justify-between px-5 shadow-lg">
            <input
              type="text"
              placeholder="Search for restaurant, item or more"
              className="outline-none w-full text-lg text-gray-700"
            />

            <Search className="text-gray-500" />
          </div>
        </div>
      </div>

      {/* ================= SERVICE CARDS ================= */}

      <div className="w-[75%] mx-auto flex justify-center gap-8 mt-20 pb-20 relative z-10">
        
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#f2f2f2] rounded-[40px] p-8 w-[360px] h-[310px] relative overflow-hidden hover:scale-105 transition duration-300 cursor-pointer"
          >
            
            <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
              {card.title}
            </h1>

            <p className="text-lg text-gray-500 font-semibold mt-2">
              {card.subtitle}
            </p>

            <button className="bg-[#ffe8de] text-[#ff5200] px-4 py-2 rounded-full mt-6 font-bold">
              {card.offer}
            </button>

            {/* Arrow */}
            <div className="bg-[#ff5200] text-white w-14 h-14 rounded-full flex items-center justify-center mt-12">
              <ArrowRight />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Header;