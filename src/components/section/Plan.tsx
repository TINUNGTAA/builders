import assets from "../../assets/assests";
import BlueBand from "../layout/blueBand";

const Plan: React.FC = () => {
  return (
    <section className=" cotainer flex font-inter md:h-[680px] relative overflow-hidden">
      <div className="flex gap-20 md:gap-[250px] md:px-28 py-18 mt-12">
        <div className="flex">
          <img src={assets.home.plan} className="" />
        </div>

        <div className="hidden md:block space-y-6">
          <img src={assets.home.search2} />
          <h1 className="text-[48px] font-semibold ">
            <span className="text-brown">WANT </span>TO GET STARTED?
          </h1>
          <p className="text-xl">Let's get you a plan with our </p>
          <a className="text-brown text-[24px] font-semibold">PLAN FINDER</a>
          <a className="text-brown text-[24px] font-semibold">PLAN FINDER</a>
          <br />
          <button className="py-3 w-[174px] text-white text-xl rounded-lg bg-blue">
            Get Started{" "}
          </button>
        </div>

        <div className="md:hidden">
          <img src={assets.home.search2} />
        </div>
      </div>

      {/* Card  */}
      <div className="  flex flex-col items-center  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold w-[352px] space-y-3 h-[164px] bg-[#E9EAEF] md:hidden py-10 z-10">
        <h1 className="text-[14px]"><span className="text-brown">WANT</span> TO GET STARTED?</h1>
        <p className="text-[12px]">Let's get a plan with our <span className="text-brown">PLAN FINDER</span></p>
        <button className="w-[100px] h-[30px]  text-white rounded-sm text-center font-bold text-[10px] bg-blue">
              Get Started
            </button>
      </div>

      <div className="absolute hidden md:block bottom-0 w-full">
        <BlueBand />
      </div>
    </section>
  );
};

export default Plan;