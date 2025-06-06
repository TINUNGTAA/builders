import React from "react";
import assets from "../../assets/assests";

const PropertyCard: React.FC = () => {
  return (
    <div className="font-inter">
      <div className="w-[380px]   rounded-lg h-[400px] bg-white p-3 ">
        <div className="relative">
          <img src={assets.home.graceView} className="rounded-lg" />

          <div className=" w-full bottom-0 absolute   text-xl text-white  py-4  bg-[#00000066]  flex justify-between px-4">
            <p>Western</p>
            <p>C18,000</p>
          </div>
        </div>

        <div className="flex  items-center  justify-between ">
          <div className="space-y-4 py-6">
            <h1 className="font-semibold text-xl">Grace-View Meadows</h1>
            <p className="text-[#00000080]">
              18, Macaulay way. <span className="font-semibold">Northern</span>
            </p>

            <div className="flex gap-4 text-[#00000080]">
              <img src="#"></img>
              <p>3</p>
              <img src="#"></img>
              <p>2</p>
              <img src="#"></img> <p>4</p>
              <img src="#"></img>
              <p>2</p>
            </div>
          </div>

          {/* <div className=" flex flex-col " >
                                
                                
                                <div className="border shadow-lg  flex flex-col justify-center items-center    rounded-lg">

                                    <div className="flex-col justify-center items-center p-2 bg-slate-600">
                                    <img src={assets.home.plans} className="block bg-slate-400  w-1/2  "/>

<a href="#" className="text-brown underline font-semibold text-center ">View link</a>
                                    </div>
                                
                                </div>
                                
                            </div> */}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
