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
    <section className="flex flex-col h-screen overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center relative transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        }}
      >
        <Head />
        <div className="flex items-center justify-center h-full">
          <button className="w-[315px] mt-6 h-10 px-4 flex items-center gap-2 text-gray-500 text-xl rounded-lg bg-white shadow-sm">
            <span>
              <img
                src={assets.home.search_icon}
                alt="search icon"
                className="h-8 w-8"
              />
            </span>
            Search
          </button>
        </div>

        <div className="absolute bottom-0 w-full">
          <Band />
        </div>
      </div>
    </section>
  );
};

export default Hero;
