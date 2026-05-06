import { useState } from "react";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.746-8.851L1.234 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M3.18 23.76c.3.17.64.24.99.2l13.18-11.94-2.79-2.79L3.18 23.76zM.19 1.27C.07 1.55 0 1.87 0 2.23v19.54c0 .36.07.68.19.96l.1.1L10.86 12V11.76L.29 1.17l-.1.1zM20.56 10.3l-2.78-1.6-3.12 2.84 3.12 2.84 2.81-1.62c.8-.46.8-1.2-.03-1.46zM4.17.24L17.78 12 14.99 14.79 1.78.94A1.38 1.38 0 014.17.24z" />
  </svg>
);

const cities = [
  "Bangalore", "Gurgaon", "Hyderabad", "Delhi",
  "Mumbai", "Pune", "Chennai", "Kolkata",
  "Ahmedabad", "Surat", "Jaipur", "Lucknow",
];

export default function Footer() {
  const [cityOpen, setCityOpen] = useState(false);

  return (
    <footer className="bg-[#f0f0f5] text-gray-700 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-[220px_1fr_1fr_1fr_1fr] gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#fc8019" }}>
                <svg viewBox="0 0 40 40" className="w-7 h-7" fill="white">
                  <circle cx="20" cy="16" r="9" fill="white" opacity="0.15" />
                  <path d="M20 4C13.4 4 8 9.4 8 16c0 9 12 20 12 20s12-11 12-20c0-6.6-5.4-12-12-12zm0 16a4 4 0 110-8 4 4 0 010 8z" fill="white" />
                </svg>
              </div>
              <span className="text-2xl font-bold" style={{ color: "#fc8019" }}>Swiggy</span>
            </a>
            <p className="text-sm text-gray-500">© 2025 Swiggy Limited</p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-sm tracking-wide">Company</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="https://www.swiggy.com/about" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="https://www.swiggy.com/corporate" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Swiggy Corporate</a></li>
              <li><a href="https://careers.swiggy.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Careers</a></li>
              <li><a href="https://www.swiggy.com/team" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Team</a></li>
              <li><a href="https://www.swiggy.com/swiggy-one" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Swiggy One</a></li>
              <li><a href="https://www.swiggy.com/instamart" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Swiggy Instamart</a></li>
              <li><a href="https://www.swiggy.com/dineout" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Swiggy Dineout</a></li>
              <li><a href="https://www.swiggy.com/minis" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Minis</a></li>
              <li><a href="https://www.pyng.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Pyng</a></li>
            </ul>
          </div>

          {/* Contact us + Legal */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-sm tracking-wide">Contact us</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="https://www.swiggy.com/support" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Help &amp; Support</a></li>
                <li><a href="https://partner.swiggy.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Partner With Us</a></li>
                <li><a href="https://www.swiggy.com/ride-with-us" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Ride With Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-sm tracking-wide">Legal</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="https://www.swiggy.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Terms &amp; Conditions</a></li>
                <li><a href="https://www.swiggy.com/cookie-policy" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Cookie Policy</a></li>
                <li><a href="https://www.swiggy.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Available In */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-sm tracking-wide">Available in:</h3>
            <ul className="space-y-3 text-sm text-gray-600 mb-4">
              {["Bangalore", "Gurgaon", "Hyderabad", "Delhi", "Mumbai", "Pune"].map((city) => (
                <li key={city}>
                  <a
                    href={`https://www.swiggy.com/city/${city.toLowerCase()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-500 transition-colors"
                  >
                    {city}
                  </a>
                </li>
              ))}
            </ul>

            {/* City Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCityOpen((prev) => !prev)}
                className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 text-sm bg-white hover:border-orange-400 transition-colors focus:outline-none"
              >
                685 cities
                <svg
                  className={`w-4 h-4 transition-transform ${cityOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {cityOpen && (
                <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-y-auto">
                  {cities.map((city) => (
                    <a
                      key={city}
                      href={`https://www.swiggy.com/city/${city.toLowerCase()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                    >
                      {city}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Life at Swiggy + Social */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-sm tracking-wide">Life at Swiggy</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="https://www.swiggy.com/explore" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Explore With Swiggy</a></li>
                <li><a href="https://bytes.swiggy.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Swiggy News</a></li>
                <li><a href="https://snackables.swiggy.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Snackables</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-sm tracking-wide">Social Links</h3>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/company/swiggy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500 transition-colors" aria-label="LinkedIn">
                  <LinkedInIcon />
                </a>
                <a href="https://www.instagram.com/swiggy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500 transition-colors" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href="https://www.facebook.com/swiggy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500 transition-colors" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href="https://www.pinterest.com/swiggy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500 transition-colors" aria-label="Pinterest">
                  <PinterestIcon />
                </a>
                <a href="https://twitter.com/swiggy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500 transition-colors" aria-label="Twitter / X">
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Bottom App Download Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-base font-semibold text-gray-800 text-center md:text-left">
            For better experience, download the Swiggy app now
          </p>
          <div className="flex gap-4">
            {/* App Store */}
            <a
              href="https://apps.apple.com/in/app/swiggy-food-grocery-delivery/id989540920"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white rounded-xl px-4 py-2.5 hover:bg-gray-900 transition-colors"
            >
              <AppleIcon />
              <div className="leading-tight">
                <div className="text-[10px] text-gray-300">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=in.swiggy.android"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white rounded-xl px-4 py-2.5 hover:bg-gray-900 transition-colors"
            >
              <GooglePlayIcon />
              <div className="leading-tight">
                <div className="text-[10px] text-gray-300">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
