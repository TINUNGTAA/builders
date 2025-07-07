import React from "react";
import assets from "../../assets/assests";

interface PropertyCardProps {
  image: string;
  tagLeft: string;
  tagRight: string;
  title: string;
  location: string;
  city: string;
  bedrooms: number;
  sofas: number;
  washrooms: number;
  kitchens: number;
  planImage: string;
  planLink: string;
}

const Property: React.FC<PropertyCardProps> = ({
  image,
  tagLeft,
  tagRight,
  title,
  location,
  city,
  bedrooms,
  sofas,
  washrooms,
  kitchens,
  planImage,
  planLink,
}) => {
  return (
    <div className="flex bg-[#B9BFCD] font py-6 px-3 w-full">
      <div className="w-[350px] rounded-lg h-[400px] bg-white p-3">
        {/* top */}
        <div className="relative">
          <img src={image} className="rounded-lg" />
          <img
            src={assets.home.heart}
            className="absolute top-4 right-4 w-8 h-8"
            alt="Favorite"
          />
          <div className="w-full bottom-0 absolute text-[14px] text-white py-4 bg-[#00000066] flex justify-between px-4">
            <p>{tagLeft}</p>
            <p>{tagRight}</p>
          </div>
        </div>

        {/* down */}
        <div className="flex items-center justify-between py-6">
          <div className="space-y-3 fle-col">
            <h1 className="font-bold">{title}</h1>

            <div className="flex text-sm items-center text-gray-500">
              <img src={assets.home.location} className="w-[22px]" />
              <p>
                {location}, <span className="font-bold">{city}</span>
              </p>
            </div>

            <ul className="flex text-gray-500 text-sm items-center space-x-3">
              <li className="flex items-center">
                <img src={assets.home.bedroom} className="w-[20px]" />
                <span className="px-2">{bedrooms}</span>
              </li>
              <li className="flex items-center">
                <img src={assets.home.sofa} className="w-[20px]" />
                <span className="px-2">{sofas}</span>
              </li>
              <li className="flex items-center">
                <img src={assets.home.washroom} className="w-[16px]" />
                <span className="px-2">{washrooms}</span>
              </li>
              <li className="flex items-center">
                <img src={assets.home.kitchen} className="w-[25px]" />
                <span className="px-2">{kitchens}</span>
              </li>
            </ul>
          </div>

          <div className="border p-4 rounded-md shadow-md">
            <img src={planImage} alt="plan" className="mb-4" />
            <a href={planLink} className="font-bold text-brown underline">
              View Plan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
