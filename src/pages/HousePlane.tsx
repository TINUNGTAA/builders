import assets from "../assets/assests";
import Header from "../components/layout/header2";
import HouseCard from "../components/layout/HouseCard"; //

const HousePlane = () => {
  return (
    <div className="flex flex-col font-inter h-screen overflow-hidden">
      <Header />
      <div className="bg-[#DDE0E7] py-3 px-16 ">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-black  leading-normal  text-xl">
            Greater Accra
          </h1>
          <div className="flex items-center gap-12">
            <button className="w-[230px] h-10 px-4 flex items-center gap-2 text-gray-500 text-2xl rounded-lg bg-white shadow-sm">
              <img
                src={assets.home.search_icon}
                alt="search icon"
                className="h-8 w-8"
              />
              Search
            </button>
            <button className="flex items-center hover:text-brown  gap-3 text-xl">
              <img src={assets.housePlan.filter} alt="filter icon" />
              <span className="text-brown underline">Filter</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-1">
        <div
          className="w-10/12 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${assets.housePlan.accraPlan})` }}
        ></div>

        {/* Sidebar */}
        <div className="flex-col items-center justify-center px-6 py-6">
          <p className="mb-3 font-medium">Featuerd</p>
          <HouseCard
            image={assets.housePlan.image1}
            title="Broken Oak"
            type="5 Bedroom Duplex"
            price="C38,500"
            link="#"
          />

          <HouseCard
            image={assets.housePlan.image2}
            title="Craven Me..."
            type="5 Bedroom Duplex"
            price="C38,500"
            link="#"
          />

          <HouseCard
            image={assets.housePlan.image3}
            title="Blue Top"
            type="5 Bedroom Duplex"
            price="C38,500"
            link="#"
          />
        </div>
      </div>
    </div>
  );
};

export default HousePlane;
