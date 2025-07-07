import assets from "../../assets/assests";
import { NavLink } from "react-router-dom";
import Gallery from "./Gallery";
import Plan from "./Plan";
import Footer from "../layout/Footer";
import Testimonial from "../layout/Testimonial";
import Header from "../layout/header2";
import PropertyCarousel from "../layout/card";
export const HeroSmall = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "border-b-4 border-b-brown" : "border-b-4 border-transparent";
  return (
    <section className="md:hidden font-inter">
      <div
        className="w-full h-[290px] bg-cover bg-center relative text-white "
        style={{ backgroundImage: `url(${assets.trust.bg6})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#00000080] z-0"></div>

        <div className="relative z-10">
          <Header />
        </div>

        <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center z-10">
          <div>
            <h1 className="flex flex-col items-center text-[24px] font-bold text-center">
              <span>Discover Properties,</span>
              <span className="text-brown">Build Futures.</span>
              <button className="w-[87px] h-[27px] rounded-sm text-center font-bold text-[10px] bg-blue">
                Get Started
              </button>
            </h1>
          </div>

          <div className="flex items-center justify-center bottom-0">
            <div className="relative w-[112px] text-[7px] mt-8">
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
     
      <div>
       {/* white band */}
      <div className="w-full h-[55px] p-5 flex justify-center items-center bg-[#E9EAEF] ">
        <p className="font-semibold text-[14px] text-[#363636]">
          Discover the experience
        </p>
      </div>

      {/* blue band */}
      <div className="w-full h-[58px] flex whitespace-nowrap  overflow-x-auto items-center bg-blue">
        <div className="flex  items-center px-8 gap-x-[50px] text-[10px] font-medium text-white">
          <NavLink to="/trust-us" className={linkClass}>
            HOW TRUST IS BUILT
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            ABOUT US
          </NavLink>
          <NavLink to="/process" className={linkClass}>
            OUR PROCESS
          </NavLink>
          <NavLink to="/customer-care" className={linkClass}>
            CUSTOMER CARE
          </NavLink>
        </div>
      </div>
      </div>
      {/*Explore our community  and map cards*/}
      <div className=" mt-5 text-[14px] font-semibold mb-5 px-6">
        <div className=" flex items-center justify-center text-center">
          <h1 className="">
            <span className="text-brown">EXPLORE</span> <br />
            <span>OUR COMMUNITY</span>
          </h1>
        </div>
        {/* map card */}
        <div className="flex gap-12 mt-12 ">
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

      {/* login and sign up */}
      <div className="py-6 bg-[#E9EAEF]">
        <div className="flex w-2/3 mx-auto gap-6 items-center    ">
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

      <div></div>
      <div className="text-inter">
        <div className="w-[385px] h-[205px] mx-auto flex items-center justify-center  border border-[#666666] rounded-lg">
          <div className="w-[350px] h-[182px] border px-10  border-[#F0E1D3] rounded-lg">
            <div className="mx-auto flex  flex-col items-center space-y-3 text-center">
              <h1 className="text-[12px] mt-3 font-extrabold">Top Quality</h1>
              <img src={assets.trust.stars} />
              <p className="text-[10px]  font-normal">
                Everyone, and I mean everyone; from the managers, to the worker
                and non-staff were very professional. The house is so gorgeous
                my wife can't stop gushing over it. Quality is out of this
                world. Top job!.
              </p>

              <p className="font-semibold text-[12px]">Efisah. J</p>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
      <div className="">
        <Gallery />
      </div>

<div>
 
</div>
<div>
 
</div>

<PropertyCarousel/>

      <div className="">
        <Plan />
      </div>
      <Footer />
    </section>
  );
};
