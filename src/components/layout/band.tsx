
import { NavLink } from "react-router-dom";

const Band: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "border-b-4 border-b-brown" : "border-b-4 border-transparent";


  return (
    <div className="font-inter  ">
      <div className="md:flex hidden  w-full ">
        <div className="bg-[#E9EAEF] py-10  pl-28 pr-24 text-[18px]">
          <NavLink to="/plan" className={linkClass}>
            DISCOVER THE EXPERIENCE
          </NavLink>
        </div>

        <div className="flex-grow text-white bg-[#1E305E] pl-[200px] pr-[20px] py-10">
          <div className="flex gap-x-10 text-[18px]">
            <NavLink to="/trust-us" className={linkClass}>
              HOW TRUST IS BUILT
            </NavLink>
            <p>|</p>
            <NavLink to="/about" className={linkClass}>
              ABOUT US
            </NavLink>
            <p>|</p>
            <NavLink to="/process" className={linkClass}>
              OUR PROCESS
            </NavLink>
            <p>|</p>
            <NavLink to="/customer-care" className={linkClass}>
              CUSTOMER CARE
            </NavLink>
          </div>
        </div>
      </div>



{/* mobile view */}
      <div className="block md:hidden">
       {/* white band */}
      <div className="w-full max-h-[55px] p-5 flex justify-center items-center bg-[#E9EAEF] ">
        <p className="font-semibold text-[14px] text-[#363636]">
          Discover the experience
        </p>
      </div>

      {/* blue band */}
      <div className="w-full min-h-[58px] flex whitespace-nowrap  overflow-x-auto items-center bg-blue">
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
    </div>




  );
};

export default Band;