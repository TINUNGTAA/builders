// src/components/Header.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import assets from "../../assets/assests";

interface NavItem {
  name: string;
  href?: string;
  children?: NavItem[];
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  // Disable page scrolling when mobile dropdown is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Clean up on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navItems: NavItem[] = [
    { name: "Find A Home", href: "/" },
    {
      name: "Communities",
      href: "/communities",
      children: [
        { name: "Greater Accra", href: "/communities/greater-accra" },
        { name: "Northern", href: "/communities/northern" },
        { name: "Volta", href: "/communities/volta" },
        { name: "Brong-Ahafo", href: "/communities/brong-ahafo" },
      ],
    },
    {
      name: "Plan & Design",
      href: "/plan-design",
      children: [
        { name: "Documentation", href: "/plan-design/documentation" },
        { name: "Design", href: "/plan-design/design" },
        { name: "House Plan", href: "/plan-design/house-plan" },
        { name: "Legal", href: "/plan-design/legal" },
      ],
    },
    {
      name: "Catalogue",
      href: "/catalogue",
      children: [
        { name: "Documentation", href: "/catalogue/documentation" },
        { name: "Design", href: "/catalogue/design" },
        { name: "House Plan", href: "/catalogue/house-plan" },
        { name: "Legal", href: "/catalogue/legal" },
      ],
    },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="w-full h-[117px] md:bg-blue px-4 md:px-28  relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={assets.home.logo}
            alt="Logo"
            className="sm:h-[117px] sm:w-[308px] h-10"
          />
        </Link> 

        {/* Desktop Nav Links */}
        <ul className="hidden sm:flex items-center font-medium gap-10 md:pl-[150px] md:pr-[10px] text-white text-[18px]">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                to={item.href || "#"}
                className="flex items-center hover:text-blue-500 gap-4 transition-colors"
              >
                {item.name}
                <img
                  src={assets.home.arrowDown}
                  alt="arrow"
                  className="h-[6px] w-2.5"
                />
              </Link>

              {/* Desktop Hover Dropdown */}
              {item.children && (
                <ul className="absolute right-0 top-full mt-2 ml-4 w-48 bg-white rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                  {item.children.map((child) => (
                    <li key={child.name}>
                      <Link
                        to={child.href || "#"}
                        className="flex items-center justify-between px-4 py-2 text-brown-700 gap-2"
                      >
                        <span className="text-black">{child.name}</span>
                        <img
                          src={assets.home.rightArrow}
                          alt="icon"
                          className="h-4 w-2.5"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger /  */}
        <button
          className="sm:hidden text-white focus:outline-none z-50"
          onClick={() => {
            setIsMenuOpen((prev) => {
              if (!prev) setActiveSubMenu(null);
              return !prev;
            });
          }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-blue mt-2 py-4 space-y-2">
          {navItems.map((item) => {
            const isDropdown =
              item.name === "Communities" ||
              item.name === "Plan & Design" ||
              item.name === "Catalogue";

            const isOpen = activeSubMenu === item.name;

            if (isDropdown && item.children && item.children.length > 0) {
              return (
                <div key={item.name}>
                  <button
                    onClick={() =>
                      setActiveSubMenu((prev) =>
                        prev === item.name ? null : item.name
                      )
                    }
                    className="flex items-center gap-1 text-white text-lg px-4 py-2 hover:bg-[#B9BFCD] hover:bg-blue-700 transition-colors"
                  >
                    <span
                      className={`${
                        isOpen ? "text-[#CD9F70]" : ""
                      } hover:text-[#CD9F70]`}
                    >
                      {item.name}
                    </span>
                    <img
                      src={assets.home.rightArrow}
                      alt="arrow"
                      className={`h-4 w-2.5 transform transition-transform duration-200 ml-1 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Container: gray background, brown text, moved right */}
                  {isOpen && (
                    <div className="mt-[-13%] flex flex-col self-end pl-32 bg-gray-200 text-brown-700">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href || "#"}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveSubMenu(null);
                          }}
                          className="flex items-center justify-between bg-white text-yellow-500 text-lg px-4 py-2 hover:bg-gray-100 transition-colors gap-2 ml-4"
                        >
                          <span>{child.name}</span>
                          <img
                            src={assets.home.rightArrow}
                            alt="icon"
                            className="h-4 w-2.5"
                          />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // Simple links without arrow
            const shouldHideArrow =
              item.name === "Find A Home" || item.name === "Contact Us";

            return (
              <Link
                key={item.name}
                to={item.href || "#"}
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveSubMenu(null);
                }}
                className="flex items-center gap-0 px-4 py-2 text-white text-lg hover:bg-blue-700 transition-colors"
              >
                {item.name}
                {!shouldHideArrow && (
                  <img
                    src={assets.home.rightArrow}
                    alt="arrow"
                    className="h-4 w-2.5 ml-1"
                  />
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
//.... just had to make changes so i could push.