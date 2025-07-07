import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import assets from "../../assets/assests";

interface PropertyDetails {
  image: string;
  city: string;
  price: string;
  location: string;
  location1: string;
  place: string;
  bedrooms: string;
  bathrooms: string;
  kitchens: string;
  garages: string;
  plan: string;
  planView: string;
}

const PropertyCard: React.FC<{
  property: PropertyDetails;
  isActive?: boolean;
  isPartial?: boolean;
}> = ({ property, isActive = false, isPartial = false }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-3 transition-all duration-300 ${
        isActive ? "h-[288px] w-[250px]" : "h-[260px] w-[200px]"
      } ${isPartial ? "opacity-60" : "opacity-80"}`}
    >
      <div className="relative">
        <img
          src={property.image}
          className={`rounded-lg w-full ${
            isActive ? "h-[140px]" : "h-[120px]"
          } object-cover`}
          alt={property.location}
        />
        <div className="absolute bottom-0 w-full text-xs text-white py-2 bg-black/40 flex justify-between px-4">
          <p>{property.city}</p>
          <p>{property.price}</p>
        </div>
      </div>

      <div
        className={`flex items-center ${
          isActive ? "gap-4" : "gap-2"
        } justify-between mt-2`}
      >
        <div className="space-y-2">
          <h1 className={`font-semibold ${isActive ? "text-sm" : "text-xs"}`}>
            {property.location}
          </h1>
          <p
            className={`text-gray-500 ${isActive ? "text-xs" : "text-[11px]"}`}
          >
            {property.location1}{" "}
            <span className="font-semibold">{property.place}</span>
          </p>
          <div
            className={`flex items-center ${
              isActive ? "text-xs gap-2" : "text-[11px] gap-1"
            } text-gray-500`}
          >
            <span className="flex">
              {" "}
              <img src={assets.home.bedroom} />
              {property.bedrooms}{" "}
            </span>
            <span className="flex">
              <img src={assets.home.bedroom} />
              {property.bathrooms}{" "}
            </span>
            <span className="flex">
              <img src={assets.home.bedroom} />
              {property.kitchens}{" "}
            </span>
            <span className="flex">
              <img src={assets.home.bedroom} />
              {property.garages}{" "}
            </span>
          </div>
        </div>

        <div
          className={`flex items-center border border-gray-200 rounded-lg shadow-md ${
            isActive ? "p-2" : "p-1"
          } justify-center flex-1 flex-col`}
        >
          <img
            src={property.plan}
            className={`rounded-lg ${isActive ? "h-[50px]" : "h-[40px]"}`}
            alt="Floor plan"
          />
          <p
            className={`font-medium mt-1 text-brown underline ${
              isActive ? "text-xs" : "text-[11px]"
            }`}
          >
            {property.planView}
          </p>
        </div>
      </div>
    </div>
  );
};

const PropertyCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 210;
  const sideCardVisibleWidth = 100;

  const properties: PropertyDetails[] = [
    {
      image: assets.home.graceView,
      city: "Lagos",
      price: "$1,200/mo",
      location: "Grace View Meadows",
      location1: "18, Macaulay Way",
      place: "Lekki Phase 1",
      bedrooms: "3",
      bathrooms: "2",
      kitchens: "1",
      garages: "1",
      plan: assets.home.plans,
      planView: "View Plan",
    },
    {
      image: assets.home.graceView,
      city: "Abuja",
      price: "$1,500/mo",
      location: "Sunny Hills Residences",
      location1: "25, Palm Avenue",
      place: "Maitama",
      bedrooms: "4",
      bathrooms: "3",
      kitchens: "1",
      garages: "2",
      plan: assets.home.plans,
      planView: "View Plan",
    },
    {
      image: assets.home.graceView,
      city: "Port Harcourt",
      price: "$1,100/mo",
      location: "Harbor View Apartments",
      location1: "7, Marina Road",
      place: "GRA Phase 2",
      bedrooms: "2",
      bathrooms: "2",
      kitchens: "1",
      garages: "1",
      plan: assets.home.plans,
      planView: "View Plan",
    },
    {
      image: assets.home.graceView,
      city: "Enugu",
      price: "$900/mo",
      location: "Hilltop Villas",
      location1: "42, Independence Layout",
      place: "GRA",
      bedrooms: "3",
      bathrooms: "2",
      kitchens: "1",
      garages: "1",
      plan: assets.home.plans,
      planView: "View Plan",
    },
    {
      image: assets.home.graceView,
      city: "Kano",
      price: "$800/mo",
      location: "Desert Oasis Homes",
      location1: "15, Bompai Road",
      place: "Nassarawa",
      bedrooms: "2",
      bathrooms: "1",
      kitchens: "1",
      garages: "0",
      plan: assets.home.plans,
      planView: "View Plan",
    },
    
  ];

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "left" && currentIndex < properties.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === "right" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    trackMouse: true,
  });

  return (
    <div className="relative w-full overflow-hidden py-12 bg-gray-100">
      <div
        className="flex items-center h-[350px] transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(calc(50% - ${currentIndex * cardWidth}px - ${
            currentIndex === 0 ? sideCardVisibleWidth / 2 : 0
          }px))`,
        }}
        {...handlers}
      >
        {properties.map((property, index) => {
          const isActive = index === currentIndex;
          const isLeftmost = index === 0;
          const isRightmost = index === properties.length - 1;
          const shouldPeekLeft = isLeftmost && currentIndex > 0;
          const shouldPeekRight =
            isRightmost && currentIndex < properties.length - 1;
          const isPartial = shouldPeekLeft || shouldPeekRight;

          return (
            <div
              key={index}
              className={`flex-shrink-0 transition-all duration-300 ${
                isActive ? "z-10 mx-4" : "z-0 mx-2"
              }`}
              style={{
                transform: isActive ? "scale(1)" : "scale(0.9)",
                marginLeft: shouldPeekLeft
                  ? `-${cardWidth - sideCardVisibleWidth}px`
                  : "0",
                marginRight: shouldPeekRight
                  ? `-${cardWidth - sideCardVisibleWidth}px`
                  : "0",
              }}
            >
              <PropertyCard
                property={property}
                isActive={isActive}
                isPartial={isPartial}
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        <button
          onClick={() => handleSwipe("right")}
          disabled={currentIndex === 0}
          className="pointer-events-auto p-2 rounded-full bg-white/80 shadow-md hover:bg-white"
        >
          <img src={assets.home.arrowBack} alt="Previous" className="w-6 h-6" />
        </button>
        <button
          onClick={() => handleSwipe("left")}
          disabled={currentIndex === properties.length - 1}
          className="pointer-events-auto p-2 rounded-full bg-white/80 shadow-md hover:bg-white"
        >
          <img src={assets.home.arrowForword} alt="Next" className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {properties.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 hs-2 rounded-full transition-all ${
              index === currentIndex ? "bg-blue-500 w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyCarousel;
