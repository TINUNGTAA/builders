import React from "react";
import { NavLink } from "react-router-dom";

const Band: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "border-b-4 border-b-brown pb-1"
      : "border-b-4 border-transparent pb-1";

  // Secondary nav items for the right section
  const rightLinks = [
    { name: "HOW TRUST IS BUILT", href: "/trust-us" },
    { name: "ABOUT US", href: "/about" },
    { name: "OUR PROCESS", href: "/process" },
    { name: "CUSTOMER CARE", href: "/customer-care" },
  ];

  return (
    <div className="font-inter w-full">
      <div className="flex flex-col sm:flex-row w-full">
        {/* Left Side: Discover the Experience */}
        <div className="bg-[#E9EAEF] w-full sm:w-auto text-center sm:text-left py-6 sm:py-10 px-4 sm:px-28 text-sm sm:text-xl">
          <NavLink to="/plan" className={linkClass}>
            DISCOVER THE EXPERIENCE
          </NavLink>
        </div>

        {/* Right Side: Other Links */}
        <div className="bg-[#1E305E] text-white w-full sm:flex-grow overflow-x-auto sm:overflow-visible sm:pl-40 py-6 sm:py-10 px-4 sm:px-[20px]">
          <div className="flex gap-x-10 whitespace-nowrap sm:text-xl text-[10px]">
            {rightLinks.map((item, idx) => (
              <React.Fragment key={item.name}>
                <NavLink to={item.href} className={linkClass}>
                  {item.name}
                </NavLink>
                {idx < rightLinks.length - 1 && (
                  <span className="text-white">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Band;
