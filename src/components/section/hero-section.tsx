import assets from "../../assets/assests";
import Head from "../layout/header";
import Band from "../layout/band";
import { useState, useEffect } from "react";

const backgroundImages = [
  assets.home.bg1,
  assets.home.bg2,
  assets.home.bg3,
  assets.home.bg4,
  assets.home.bg5,
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col h-screen font-inter overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center relative transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        }}
      >
        <Head />
        <div className="flex items-center justify-center h-[880px] ">
          <div className="relative w-[315px]  text-xl  mt-6">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-[44px] pl-12 pr-4 text-gray-500 text-xl rounded-xl bg-white shadow-sm outline-none"
            />
            <img
              src={assets.home.search_icon}
              alt="search icon"
              className="absolute left-4 top-6 transform -translate-y-1/2 h-6 w-6"
            />
          </div>
        </div>

        <div className="absolute bottom-0 w-full">
          <Band />
        </div>
      </div>
    </section>
  );
};

export default Hero;
