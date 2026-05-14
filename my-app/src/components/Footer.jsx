// components/Footer.jsx

import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f2f2f7] pt-16 pb-10">
      
      {/* TOP SECTION */}
      <div className="w-[85%] mx-auto flex justify-between flex-wrap gap-10">

        {/* LOGO SECTION */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_800,h_800/portal/m/logo_192x192.png"
              alt="Swiggy"
              className="w-10 h-10 rounded-2xl"
            />

            <h1 className="text-[#ff5200] text-3xl font-bold">
              Swiggy
            </h1>
          </div>

          <p className="text-gray-600 mt-3 text-[15px]">
          © 2025 Swiggy Limited
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h2 className="font-bold text-2xl mb-5">
            Company
          </h2>

          <div className="flex flex-col gap-4 text-gray-600 text-[18px]">
            <p>About Us</p>
            <p>Swiggy Corporate</p>
            <p>Careers</p>
            <p>Team</p>
            <p>Swiggy One</p>
            <p>Swiggy Instamart</p>
            <p>Swiggy Dineout</p>
            <p>Minis</p>
            <p>Pyng</p>
          </div>
        </div>

        {/* CONTACT + LEGAL */}
        <div className="flex flex-col gap-14">

          {/* CONTACT */}
          <div>
            <h2 className="font-bold text-2xl mb-5">
              Contact us
            </h2>

            <div className="flex flex-col gap-4 text-gray-600 text-[18px]">
              <p>Help & Support</p>
              <p>Partner With Us</p>
              <p>Ride With Us</p>
            </div>
          </div>

          {/* LEGAL */}
          <div>
            <h2 className="font-bold text-2xl mb-5">
              Legal
            </h2>

            <div className="flex flex-col gap-4 text-gray-600 text-[18px]">
              <p>Terms & Conditions</p>
              <p>Cookie Policy</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>

        {/* AVAILABLE IN */}
        <div>
          <h2 className="font-bold text-2xl mb-5">
            Available in:
          </h2>

          <div className="flex flex-col gap-4 text-gray-600 text-[18px]">
            <p>Bangalore</p>
            <p>Gurgaon</p>
            <p>Hyderabad</p>
            <p>Delhi</p>
            <p>Mumbai</p>
            <p>Pune</p>

            <select className="border border-gray-400 rounded-xl px-4 py-2 bg-transparent outline-none">
              <option>685 cities</option>
            </select>
          </div>
        </div>

        {/* LIFE AT SWIGGY */}
        <div>
          <h2 className="font-bold text-2xl mb-5">
            Life at Swiggy
          </h2>

          <div className="flex flex-col gap-4 text-gray-600 text-[18px]">
            <p>Explore With Swiggy</p>
            <p>Swiggy News</p>
            <p>Snackables</p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-14">
            <h2 className="font-bold text-2xl mb-5">
              Social Links
            </h2>

            <div className="flex items-center gap-5 text-gray-700">
              
              <FaLinkedin
                size={24}
                className="cursor-pointer hover:text-[#ff5200] transition"
              />

              <FaInstagram
                size={24}
                className="cursor-pointer hover:text-[#ff5200] transition"
              />

              <FaFacebook
                size={24}
                className="cursor-pointer hover:text-[#ff5200] transition"
              />

              <FaTwitter
                size={24}
                className="cursor-pointer hover:text-[#ff5200] transition"
              />
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-[90%] h-[1px] bg-gray-400 mx-auto my-16"></div>

      {/* APP DOWNLOAD SECTION */}
      <div className="w-[85%] mx-auto flex items-center justify-center gap-10 flex-wrap">
        
        <h1 className="text-2xl font-bold text-gray-800">
          For better experience, download the Swiggy app now
        </h1>

        <div className="flex items-center gap-6">
          
          {/* APP STORE */}
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="w-52 cursor-pointer hover:scale-105 transition"
          />

          {/* PLAY STORE */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="w-56 cursor-pointer hover:scale-105 transition"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;