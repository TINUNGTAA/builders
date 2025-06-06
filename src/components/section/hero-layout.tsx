import React from "react";
import Header from "../layout/header2"; // updated Header
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
    <section className="flex flex-col  font-inter overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-no-repeat bg-center relative flex flex-col"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
         <div className="absolute inset-0 bg-black/50 md:hidden" />

        {/* Responsive Header */}
        <Header />

        {/* Centered Content (pushed down so it doesn’t sit under the header) */}
        <div className="flex flex-1 items-center justify-center md:mb-[150px] sm:px-8">
          {children}
        </div>

        {/* Responsive Band at the Bottom */}
        <div className="absolute bottom-0 w-full">
          <Band />
        </div>
      </div>
    </section>
  );
};

export default HeroLayout;
