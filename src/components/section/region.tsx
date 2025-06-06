import React from "react";

type RegionCardProps = {
  title: string;
  backgroundImage: string;
  icon: string;
  buttonText: string;
};

const RegionCard: React.FC<RegionCardProps> = ({
  title,
  backgroundImage,
  icon,
  buttonText,
}) => {
  return (
    <div
      className="flex font-inter gap-[250px] items-center justify-center px-20 h-[50vh] bg-cover mb-6 bg-center"
      style={{
        backgroundImage: `radial-gradient(circle, #000000B2, #1E305E), url(${backgroundImage})`,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* left */}
      <div>
        <h1 className="text-[48px] text-brown font-bold">{title}</h1>
      </div>

      {/* right */}
      <div className="flex flex-col items-center">
        <img
          src={icon}
          alt={`${title} icon`}
          className="fill-current text-black "
        />
        <div>
          <button className="py-4 rounded-lg px-12 bg-blue text-white font-bold text-xl">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegionCard;
