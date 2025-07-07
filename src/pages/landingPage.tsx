import assets from "../assets/assests";
import Hero from "../components/section/hero-section";
import Plan from "../components/section/Plan";
import RegionCard from "../components/section/region";
import Footer from "../components/layout/Footer";
import Gallery from "../components/section/Gallery";
import PropertySection from "../components/section/PropertyCarousel";
import HeroLayout from "../components/section/hero-layout";
import PropertyCarousel from "../components/layout/card";
const Landing: React.FC = () => {
  return (
    <section className="font-inter">
      <div className="hidden md:block">
        <Hero />
      </div>
      <div className="block md:hidden">
        <HeroLayout backgroundImage={assets.home.bg1}>
          <div className=" h-[491px] flex flex-col items-center justify-center mt-6  text-center">
            <div className="mx-auto h-[350px]">
              <h1 className="flex flex-col items-center text-[24px] font-bold text-center">
                <span className="text-white ">Discover Properties,</span>
                <span className="text-brown">Build Futures.</span>
              </h1>
              <button className="w-[87px] h-[27px] text-white rounded-sm text-center mt-3 font-bold text-[10px] bg-blue">
                Get Started
              </button>

              <div className="flex items-center mt-12 justify-center">
                <div className="relative   w-[112px] text-[7px]">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full h-[21px] pl-12 pr-4 text-gray-500 text-[7px] rounded-lg bg-white shadow-sm outline-none"
                  />
                  <img
                    src={assets.home.search_icon}
                    alt="search icon"
                    className="absolute left-4 top-3 transform -translate-y-1/2 h-3 w-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </HeroLayout>
      </div>

      <div className=" hidden lg:flex  px-28 gap-16 justify-between items-center py-20 ">
        {/* left */}
        <div className="  ">
          <h1 className=" text-[#625B71] text-[48px]  font-semibold">
            {" "}
            <span className="text-[#CD9F70] ">EXPLORE</span> <br />
            OUR COMMUNITY
          </h1>
        </div>

        {/* right */}
        <div>
          <img src={assets.home.community} />
        </div>
      </div>

      {/* displays regions */}
      <div className=" hidden md:block mb-6 ">
        <RegionCard
          title="Greater Accra"
          backgroundImage={assets.home.greater_accra}
          icon={assets.home.accra}
          buttonText="Greater Accra"
        />

        <RegionCard
          title="Volta "
          backgroundImage={assets.home.volta}
          icon={assets.home.voltaMap}
          buttonText="volta"
        />

        <RegionCard
          title="Northern "
          backgroundImage={assets.home.north}
          icon={assets.home.northMap}
          buttonText="Nothern"
        />

        <RegionCard
          title="Bono-Ahafo "
          backgroundImage={assets.home.ahafo}
          icon={assets.home.ahafoMap}
          buttonText="Bono-Ahafo"
        />
      </div>

      {/*Explore our community  and map cards for mobile*/}
      <div className=" block md:hidden mt-5 text-[14px] font-semibold mb-5 px-3">
        <div className=" flex items-center justify-center text-center">
          <h1 className="">
            <span className="text-brown">EXPLORE</span> <br />
            <span>OUR COMMUNITY</span>
          </h1>
        </div>
        {/* map card */}
        <div
          className=" 
         justify-between px-6 flex gap-2 mt-12 "
        >
          {/* card1 */}
          <div className=" w-[89px] h-[129px] border  border-spacing-black  bg-blue rounded-lg">
            <div className=" flex justify-center items-center h-[83px]   bg-[#E9EAEF] ">
              <img src={assets.home.accra} className="w-[80px] h-[40px] " />
            </div>
            <div className="flex items-center justify-center h-[40px] ">
              <h1 className="text-[12px] text-white font-normal text-center ">
                Greater Accra
              </h1>
            </div>
          </div>
          {/* card2 */}
          <div className=" w-[89px] h-[129px] border  border-spacing-black  bg-blue rounded-lg">
            <div className=" flex justify-center items-center h-[83px]   bg-[#E9EAEF] ">
              <img src={assets.home.northMap} className="w-[80px] h-[40px] " />
            </div>
            <div className="flex items-center justify-center h-[40px] ">
              <h1 className="text-[12px] text-white font-normal text-center ">
                Northern
              </h1>
            </div>
          </div>

          {/* card3*/}
          <div className=" w-[89px] h-[129px] border  border-spacing-black  bg-blue rounded-lg">
            <div className=" flex justify-center items-center h-[83px]   bg-[#E9EAEF] ">
              <img src={assets.home.voltaMap} className="w-[80px] h-[40px] " />
            </div>
            <div className="flex items-center justify-center h-[40px] ">
              <h1 className="text-[12px] text-white font-normal text-center ">
                Volta
              </h1>
            </div>
          </div>

          {/* card4 */}
          <div className=" w-[89px] h-[129px] border  border-spacing-black  bg-blue rounded-lg">
            <div className=" flex justify-center items-center h-[83px]   bg-[#E9EAEF] ">
              <img src={assets.home.ahafoMap} className="w-[80px] h-[40px] " />
            </div>
            <div className="flex items-center justify-center h-[40px] ">
              <h1 className="text-[12px] text-white font-normal text-center ">
                Brong -Ahafo
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* login and sign up  for mobile*/}
      <div className="py-6 md:hidden    bg-[#E9EAEF]">
        <div className="flex px-9  mx-auto gap-12 items-center    ">
          <div className=" mx-auto">
            <p className="text-[14px] font-medium">
              Get the best offers on your favorite locations in your account{" "}
            </p>
          </div>

          <div className="flex items-center flex-col gap-2  text-white flex-1">
            <button className="w-[87px] h-[27px] text-[10px] font-bold bg-brown rounded">
              Log In{" "}
            </button>
            <p className="text-[12px] font-normal  text-black">or</p>
            <button className="w-[87px] h-[27px] text-[10px] font-bold bg-blue rounded">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* get started */}
      <div className=" flex  ">
        {/* right side */}
        <div className=" w-1/3 hidden md:flex justify-center  items-center bg-[#E9EAEF] font-semibold">
          <div className="flex-col justify-center text-center  items-center px-20 ">
            <h1 className="text-[30px] font-semibold ">
              Get the best offers on your favorite locations in your account
            </h1>
            <p className="text-[20px] mt-10 text-center font-normal">
              Get started
            </p>

            <div className="flex gap-12 justify-center  items-center mt-10">
              <button className="py-2 px-8 text-xl font-normal text-center text-white rounded-lg bg-brown">
                Login
              </button>{" "}
              <p className="px-[16] font-normal">or</p>
              <button className="py-2 px-8 text-xl font-normal text-center text-white rounded-lg bg-blue">
                SignUp
              </button>
            </div>
          </div>
        </div>
        {/* left */}

        <div className=" flex-1 bg-[#B9BFCD] hidden md:flex   w-full ">
          <PropertySection />
        </div>
      </div>
      {/* band under property display */}
      <div className="md:flex hidden items-center  justify-end mb-24">
        <div className="font-semibold text-[14px] flex">
          <div className="py-3 text-brown font-semibold  px-8 bg-blue">
            <a href="#">Recommended</a>
          </div>

          <div className="flex bg-[#DDE0E7]  text-[#00000080] py-3 px-6">
            <a href="#" className=" px-6">
              Favorite
            </a>
            <a href="#" className=" px-6">
              Recent Viewing
            </a>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <PropertyCarousel />
      </div>
      {/* mobile recommended and favorites section */}
      <div className=" flex whitespace-nowrap  overflow-x-auto  md:hidden  text-sm mb-3 bg-[#DDE0E7] h-12 w-full">
        <div className="flex items-center px-10  bg-blue flex-shrink-0">
          <p className="text-brown font-medium">Recommended</p>
        </div>
        <div className="flex flex-grow justify-between gap-6 px-10 items-center bg-[#DDE0E7] ">
          <p className="text-[#00000080] text-center ">Favorites</p>
          <p className="text-[#00000080] text-center ">Recent Viewing</p>
        </div>
      </div>

      <Gallery />

      <Plan />
      <Footer />
    </section>
  );
};

export default Landing;
