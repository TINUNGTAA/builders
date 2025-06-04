import assets from "../../assets/assests";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Gallery from "./Gallery";
import Plan from "./Plan";
import Footer from "../layout/Footer";


export const HeroSmall = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "border-b-4 border-b-brown" : "border-b-4 border-transparent";
  return (
    <section className="md:hidden font-inter">
    <div
      className="w-full h-[290px] bg-cover bg-center relative text-white "
      style={{ backgroundImage: `url(${assets.home.bg1})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00000080] z-0"></div>

      {/* Top nav bar */}
      <div className="flex items-center justify-between px-6 pt-4 relative z-10">
        <div className="flex">
          <Link to="/">
            <img src={assets.home.logo} className="w-[125px]" alt="Logo" />
          </Link>
        </div>
        <div className="flex justify-end md:hidden">
          <img src={assets.home.hambeger} alt="Menu" />
        </div>
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
     {/* white band */}
  <div className="w-full h-[55px] p-5 flex justify-center items-center bg-[#E9EAEF] ">
    <p className="font-semibold text-[14px] text-[#363636]">Discover the experience</p>

  </div>

   {/* blue band */}
  <div className="w-full h-[58px] flex  items-center bg-blue">

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
  {/* community */}
  <div className=" mt-5 text-[14px] font-semibold mb-5 px-6">
    <div className=" flex items-center justify-center text-center">
    <h1 className=""><span className="text-brown">EXPLORE</span> <br/>
<span>OUR COMMUNITY</span></h1>
    </div>
{/* map card */}
<div className="flex gap-12 mt-12 ">
  {/* card1 */}
<div className=" w-[89px] h-[129px] border  border-spacing-black  bg-blue rounded-lg">
<div className=" flex justify-center items-center h-[83px]   bg-[#E9EAEF] ">
  <img src ={assets.home.accra} className="w-[80px] h-[40px] "/>

</div>
<div className="flex items-center justify-center h-[40px] ">
  <h1 className="text-[12px] text-white font-normal text-center " >Greater Accra</h1>
  </div>
</div>
{/* card2 */}
<div className=" w-[89px] h-[129px] border  border-spacing-black  bg-blue rounded-lg">
<div className=" flex justify-center items-center h-[83px]   bg-[#E9EAEF] ">
  <img src ={assets.home.northMap} className="w-[80px] h-[40px] "/>

</div>
<div className="flex items-center justify-center h-[40px] ">
  <h1 className="text-[12px] text-white font-normal text-center " >Northern</h1>
  </div>
</div>
  

  {/* card3*/}
<div className=" w-[89px] h-[129px] border  border-spacing-black  bg-blue rounded-lg">
<div className=" flex justify-center items-center h-[83px]   bg-[#E9EAEF] ">
  <img src ={assets.home.voltaMap} className="w-[80px] h-[40px] "/>

</div>
<div className="flex items-center justify-center h-[40px] ">
  <h1 className="text-[12px] text-white font-normal text-center " >Volta</h1>
  </div>
</div>

{/* card4 */}
<div className=" w-[89px] h-[129px] border  border-spacing-black  bg-blue rounded-lg">
<div className=" flex justify-center items-center h-[83px]   bg-[#E9EAEF] ">
  <img src ={assets.home.ahafoMap} className="w-[80px] h-[40px] "/>

</div>
<div className="flex items-center justify-center h-[40px] ">
  <h1 className="text-[12px] text-white font-normal text-center " >Brong
-Ahafo</h1>
  </div>
</div>

</div>


  </div>

  {/* login and sign up */}
<div className="py-6 bg-[#E9EAEF]">
  <div className="flex w-2/3 mx-auto gap-6 items-center    ">
    <div className=" mx-auto">
      <p className="text-[14px] font-medium">Get the best offers on your favorite locations in your account </p>
    </div>
 
 <div className="flex items-center flex-col gap-2  text-white flex-1">
  <button className="w-[87px] h-[27px] text-[10px] font-bold bg-brown rounded">Log In </button>
  <p className="text-[12px] font-normal  text-black">or</p>
  <button className="w-[87px] h-[27px] text-[10px] font-bold bg-blue rounded">Sign Up</button>
  

 </div>
  </div>
  </div>

  <div>
  </div>
  <div className="">
    <Gallery/>

  </div>
  <div className="">
    <Plan/>
    
  </div>
  <Footer/>
    </section> 
  );
};
