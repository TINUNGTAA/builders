import assets from "../assets/assests";
import HeroLayout from "../components/section/hero-layout";
import Footer from "../components/layout/Footer";

const Care = () => {
  return (
    <div className="">
      <HeroLayout backgroundImage={assets.care.bg8}>
        <div className="text-white h-[491px] md:h-[580px] flex items-center justify-center w-full">
          <div className="text-center w-full md:mt-[280px] mb-[200px]">
            <h1 className="md:text-[64px] text-center text-[24px] font-bold">
              Customer Care <br />
              With A<span className="text-brown px-3"> Heart</span>
            </h1>
          </div>
        </div>
      </HeroLayout>

      <div className="w-full px-4 sm:w-2/3 sm:mx-auto sm:leading-snug text-xs sm:text-[32px] space-y-8 py-16 text-center">
        <p>
          It's one thing to build a dream home, and another to stand behind it.
          And while we take pride in the quality of our work, we want you to
          have total trust in your new home.
        </p>

        <p>
          That's why we at Honest Builders include a 10-year structural,
          two-year mechanical and one-year functional warranty. If a problem
          should ever arise, our customer care representatives will be happy to
          help.
        </p>
      </div>

      <div
        className="bg-cover bg-center mb-24 mx-4 md:mx-0 rounded-lg overflow-hidden h-auto md:h-[70vh] flex items-center  "
        style={{
          backgroundImage: `linear-gradient( to right,  #000000CC,  #070B15D8, #0C1427E1, #131F3CEC, #18274CF5,  #1E305E ), 
        url(${assets.care.image4})`,
        }}
      >
        <div className="w-full md:w-2/6 mx-auto flex flex-col items-center py-8 md:py-0">
          <h1 className="sm:text-[64px] text-lg font-bold sm:leading-snug text-center text-white">
            Don’t wait for long, let’s get{" "}
            <span className="text-brown">started</span>
          </h1>
          <button className="mt-6 md:mt-8 sm:p-[18px] p-4 md:px-8 sm:text-[35px] text-lg rounded-lg bg-brown">
            Customer Care
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Care;
