import React from "react";

interface HouseCardProps {
  image: string;
  title: string;
  type: string;
  price: string;
  link: string;
}

const HouseCard: React.FC<HouseCardProps> = ({
  image,
  title,
  type,
  price,
  link,
}) => {
  return (
    <div className="w-[380px] h-[160px] bg-[#7676801F] font-inter mb-12 rounded-lg border shadow-lg">
      <div className="flex gap-14 items-center p-2">
        <img src={image} alt={title} className="h-[150px]" />
        <div className="text-[#00000080] text-xl flex-col">
          <h1 className="font-bold text-2xl">{title}</h1>
          <p>{type}</p>
          <p>{price}</p>
          <a className="text-[#1E305EB2] underline font-semibold" href={link}>
            View Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
