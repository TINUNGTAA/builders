import React, { useState } from "react";
import PropertyCard from "../layout/leftSide";
import assets from "../../assets/assests";

const PropertySection: React.FC = () => {
  const cards = [
    {
      image: assets.home.graceView,
      tagLeft: "Western",
      tagRight: "C18,000",
      title: "Grace-View Meadows",
      location: "18,Maccaulay way",
      city: "Northern",
      bedrooms: 3,
      sofas: 2,
      washrooms: 4,
      kitchens: 2,
      planImage: assets.home.plans,
      planLink: "#",
    },
    {
      image: assets.home.heaven,
      tagLeft: "Greater Acrra",
      tagRight: "C22,000",
      title: "Haven Hills",
      location: "18,Maccaulay way",
      city: "Northern",
      bedrooms: 3,
      sofas: 2,
      washrooms: 4,
      kitchens: 2,
      planImage: assets.home.plan2,
      planLink: "#",
    },
    {
      image: assets.home.moory,
      tagLeft: "Central",
      tagRight: "C30,000",
      title: "Moory Land Fields",
      location: "18,Maccaulay way",
      city: "Northern",
      bedrooms: 3,
      sofas: 2,
      washrooms: 4,
      kitchens: 2,
      planImage: assets.home.plan3,
      planLink: "#",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 2;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - cardsPerPage));
  };

  const handleNext = () => {
    if (startIndex + cardsPerPage < cards.length) {
      setStartIndex((prev) => prev + cardsPerPage);
    }
  };

  const visibleCards = cards.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="relative font-inter bg-[#B9BFCD] w-full">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md disabled:opacity-50"
      >
        <img src={assets.home.arrowBack} alt="Previous" className="w-6 h-6" />
      </button>

      <div className="flex justify-center">
        <div
          className={`flex gap-6 ${
            visibleCards.length === 1
              ? "justify-center w-[350px]"
              : "w-[calc(350px*2+24px)]"
          }`}
        >
          {visibleCards.map((card, index) => (
            <PropertyCard key={index} {...card} />
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        disabled={startIndex + cardsPerPage >= cards.length}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md disabled:opacity-50"
      >
        <img src={assets.home.arrowForword} alt="Next" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default PropertySection;
