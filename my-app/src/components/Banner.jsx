const Banner = () => {
  return (
    <section className="w-full bg-white py-10 flex justify-center">
      
      <div className="w-[90%]">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
          alt="Banner"
          className="w-full rounded-2xl object-cover hover:scale-[1.01] transition duration-300 shadow-md"
        />
      </div>

    </section>
  );
};

export default Banner;