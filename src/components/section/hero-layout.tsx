import React from "react";
import Header from "../layout/header2"; 
import Band from "../layout/band";

interface BackgroundLayoutProps {
  backgroundImage: string;
  children?: React.ReactNode;
}

const HeroLayout: React.FC<BackgroundLayoutProps> = ({
  backgroundImage,
  children,
}) => {
  return (
    <section className="flex flex-col font-inter overflow-hidden">
      {/* Static Header - needs to be above overlay */}
      <header className="w-full fixed top-0 left-0 z-50">
          <Header />
        </header>
      <div
        className="w-full h-[230px] md:h-full bg-cover bg-no-repeat bg-center relative flex flex-col"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay for small screens only (below md breakpoint) */}
        <div className="absolute inset-0 bg-[#00000080] md:bg-transparent z-10" />


        {/* Centered Content - needs to be above overlay */}
        <div className="flex flex-1 mx-auto items-center justify-center md:mb-[150px] sm:px-8 relative z-20">
          {children}
        </div>

        
      </div>
      {/* Responsive Band at the Bottom - needs to be above overlay */}
      <div className="mt-0 w-full z-20">
          <Band />
        </div>
    </section>
  );
};

export default HeroLayout;