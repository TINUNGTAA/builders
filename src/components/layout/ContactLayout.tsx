import React from "react";
import Header from "./header2";

interface BackgroundLayoutProps {
  backgroundImage: string;
  children?: React.ReactNode;
}

const ContactLayout: React.FC<BackgroundLayoutProps> = ({
  backgroundImage,
  children,
}) => {
  return (
    <section className="flex flex-col font-inter h-screen overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center relative flex flex-col"
        style={{ backgroundImage: `url(${backgroundImage})` }} //which background image was used here, how and why?
      >
        <Header />

        {/* Centered Children */}
        <div className="flex flex-1 items-center justify-center mb-[150px]">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContactLayout;
