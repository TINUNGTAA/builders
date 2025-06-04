import React from "react";
import assets from "../../assets/assests";

interface TeamCardProps {
  image1?: string;
  name1?: string;
  role1?: string;
  description?: string;
  image2?: string;
  name2?: string;
  role2?: string;
  image3?: string;
  name3?: string;
  role3?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  image1,
  name1,
  role1,
  description,
  image2,
  name2,
  role2,
  image3,
  name3,
  role3,
}) => {
  return (
    <div className="relative font-inter  w-full  flex justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${assets.about.back})`,
          borderRadius: "35px",
          border: "1px solid #000000",
          top: "20px",
          bottom: "20px",
          left: "20px",
          right: "20px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(30, 48, 94, 0.8)",
          borderRadius: "35px",
          top: "20px",
          bottom: "20px",
          left: "20px",
          right: "20px",
        }}
      />

      {/* Card 1 - Left side */}
      {image1 && name1 && role1 && (
        <div className="absolute left-[-190px] top-[150px] w-[380px] py-14 rounded-[40px] border bg-white shadow-md z-0">
          <div className="flex flex-col gap-3">
            <div className="text-center">
              <div className="mx-auto">
                <img src={image1} className="px-3 rounded-[30px]" />
              </div>
              <h1 className="font-semibold text-2xl mt-8">{name1}</h1>
              <p className="text-blue text-xl italic mt-3">{role1}</p>
            </div>
          </div>
        </div>
      )}

      {/* Card 2 - Centered */}
      {image2 && name2 && role2 && (
        <div className="py-8 mt-16 h-[650px] mb-16 w-[500px] rounded-[40px] border z-10 bg-white shadow-md">
          <div className="flex flex-col gap-3">
            <div className="text-center">
              <div className="w-full h-[300px] mx-auto">
                <img src={image2} className="px-3 rounded-[30px]" />
              </div>
              <h1 className="font-semibold text-2xl mt-8">{name2}</h1>
              <p className="text-blue text-xl italic mt-3">{role2}</p>
            </div>
            <div className="w-[320px] border border-[#00000033] mx-auto mt-3"></div>
            {description && (
              <div className="text-[#666666] px-12 mt-3">
                <p>{description}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Card 3 - Right side */}
      {image3 && name3 && role3 && (
        <div className="absolute right-[-190px] top-[150px] w-[380px] py-14 rounded-[40px] border bg-white shadow-md z-0">
          <div className="flex flex-col gap-3">
            <div className="text-center">
              <div className="mx-auto">
                <img src={image3} className="px-3 rounded-[30px]" />
              </div>
              <h1 className="font-semibold text-2xl mt-8">{name3}</h1>
              <p className="text-blue text-xl italic mt-3">{role3}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamCard;
