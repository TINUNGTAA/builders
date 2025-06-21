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
    <div className="relative font-inter w-full flex justify-center overflow-hidden">
      {/* Desktop layout */}
      <div className="hidden lg:flex w-full justify-center lg:h-[1142px] lg:items-center "> 
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
          className="absolute inset-0 "
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
          <div className="absolute left-[-190px] top-[20%] w-[380px] h-[669px] py-14 rounded-[40px] border bg-white shadow-md z-0">
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
          <div className="py-8 mt-16 h-[800px] mb-16 w-[600px] rounded-[40px] border z-10 bg-white shadow-md">
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
          <div className="absolute right-[-190px] top-[20%] h-[669px] w-[380px] py-14 rounded-[40px] border bg-white shadow-md z-0">
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

      {/* Mobile layout - horizontal cards */}
      <div className="flex flex-row items-center w-full lg:hidden relative justify-center gap-4 py-8 h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${assets.about.back})`,
            borderRadius: "20px",
            border: "1px solid #000000",
            top: "10px",
            bottom: "10px",
            left: "10px",
            right: "10px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(30, 48, 94, 0.8)",
            borderRadius: "20px",
            top: "10px",
            bottom: "10px",
            left: "10px",
            right: "10px",
          }}
        />

        <div className="relative flex flex-row items-center w-full gap-4 z-10 justify-center">
          {/* Card 1 */}
          {image1 && name1 && role1 && (
            <div className=" max-w-[220px] py-6 rounded-[20px] h-[300px] border bg-white shadow-md flex-shrink-0">
              <div className="flex flex-col gap-2">
                <div className="text-center">
                  <div className="mx-auto">
                    <img src={image1} className="px-2 rounded-[16px]  object-contain mx-auto" />
                  </div>
                  <h1 className="font-semibold text-base mt-4">{name1}</h1>
                  <p className="text-blue text-sm italic mt-2">{role1}</p>
                </div>
              </div>
            </div>
          )}

          {/* Card 2 */}
          {image2 && name2 && role2 && (
            <div className=" max-w-[240px] py-6 rounded-[20px] h-[400px] border bg-white shadow-md flex-shrink-0">
              <div className="flex flex-col ">
                <div className="text-center">
                  <div className="w-full h-[90px] mx-auto">
                    <img src={image2} className="px-2 rounded-[16px] object-contain mx-auto" />
                  </div>
                  <h1 className="font-semibold text-xs lg:text-[48px] mt-16">{name2}</h1>
                  <p className="text-blue text-[8px] lg:text-[32px] italic mt-2">{role2}</p>
                </div>
                <div className="w-[120px] border border-[#00000033] mx-auto mt-2"></div>
                {description && (
                  <div className="text-[#666666] px-2 mt-2 text-[5px]">
                    <p className="lg:text-xl text-[5px]">{description}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Card 3 */}
          {image3 && name3 && role3 && (
            <div className=" max-w-[220px] py-6 rounded-[20px] h-[300px] border bg-white shadow-md flex-shrink-0">
              <div className="flex flex-col gap-2">
                <div className="text-center">
                  <div className="mx-auto">
                    <img src={image3} className="px-2 rounded-[16px]  object-contain mx-auto" />
                  </div>
                  <h1 className="font-semibold text-base mt-4">{name3}</h1>
                  <p className="text-blue text-sm italic mt-2">{role3}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
