import HeroLayout from "../components/section/hero-layout";
import assets from "../assets/assests";
import Footer from "../components/layout/Footer";
import Testimonial from "../components/layout/Testimonial";

const Trust = () => {
  return (
    <div className="font-inter overflow-x-hidden">
      <HeroLayout backgroundImage={assets.trust.bg6}>
        <div className="text-white h-[491px] md:h-[580px] flex items-center justify-center w-full">
          <div className="text-center w-full md:mt-[280px] mb-[200px]">
            <h1 className="md:text-[64px] text-center text-[24px] font-bold">
              How Trust <br />
              Is
              <span className="text-brown px-3">Built</span>
            </h1>
          </div>
        </div>
      </HeroLayout>

      <div className=" md:w-2/3 px-6 mx-auto  py-10 md:py-20">
        <p className="text-center font-normal text-[12px]  md:text-[32px]">
          At Honest Builders, we know your home is the most significant
          investment you'll ever make. Whether this is your first time or your
          fifth, you're the reason we've built our business on the foundation of
          honesty and transparency.
        </p>
      </div>

      {/* card and badge */}
      <div className=" flex flex-col md:flex-row px-0  md:pl-28 md:pr-12 py-8 md:py-16 items-center  md:gap-[250px] bg-blue">
        <div className=" flex-col  ">
          <img
            src={assets.trust.review}
            alt="Customer reviews"
            className="w-[71px] h-[59px] md:w-full md:h-full mx-auto"
          />
          <p className="text-white text-center font-normal tex-[12px] md:text-[32px]">
            See reviews from our satisfied customers
          </p>
        </div>
        {/* 2 top quality cards */}
        <div className=" hidden md:flex  gap-5">
          <div className="w-[440px] h-[470px] py-12 rounded-3xl shadow-lg bg-[#DDE0E7]">
            <div className="flex flex-col items-center rounded-xl border-brown border bg-[#DDE0E7] gap-6 px-6 w-[400px] h-[380px] mx-auto text-center">
              <p className="text-[32px] mt-3 text-center font-extrabold">
                Top Quality <br />
                <img
                  src={assets.trust.stars}
                  alt="Star rating "
                  className="mx-auto"
                />
              </p>
              <p className="md:text-2xl font-normal text-[12px] text-center">
                Everyone, and I mean everyone; from the managers, to the worker
                and non-staff were very professional. The house is so gorgeous
                my wife can't stop gushing over it. Quality is out of this
                world. Top job!.
              </p>
              <p className="font-semibold">Efisah. J</p>
            </div>
          </div>

          <div className="w-[440px] h-[470px] py-12 rounded-3xl shadow-lg bg-[#DDE0E7]">
            <div className="flex flex-col items-center rounded-xl border-brown border bg-[#DDE0E7] gap-6 px-6 w-[400px] h-[380px] mx-auto text-center">
              <p className="md:text-[32px]  t mt-3 text-center font-extrabold">
                Customer Satisfaction <br />
                <img
                  src={assets.trust.stars}
                  alt="Star rating"
                  className="mx-auto"
                />
              </p>
              <p className="text-2xl font-normal text-center">
                Another satisfied customer review would go here with similar
                structure to the first one.
              </p>
              <p className="font-semibold">Customer Name</p>
            </div>
          </div>
        </div>
        {/* card with testimonial Carousel  */}
        <div className="block md:hidden ">
          <Testimonial />
        </div>
      </div>

      <div className="md:w-4/5 px-6 md:px-0 mx-auto py-10 md:py-20">
        <p className="text-center font-normal text-[12px] md:text-[32px] mb-12">
          "The heart of man is deceitful above all things," and trust is hard to
          find, so we've dedicated ourselves to doing things right by you. Your
          peace of mind is very important to us, so we act with integrity and
          trustworthiness as core values in our relationship, and we stress the
          importance of every detail. From the initial start to completion, we
          ensure your hard-earned family resources aren't in the wrong hands.
        </p>
      </div>

      <div className="flex rounded-full mx-auto items-center w-[260px] h-[260px] md:w-[600px] md:h-[600px] mb-16 border-brown border-[5px] bg-gray-500">
        <div className="flex-col items-center justify-center mx-auto w-[240px] h-[240px] md:w-[580px] md:h-[580px] border-brown border-[5px] rounded-full bg-blue  space-y-0 md:space-y-6  px-6 md:px-24 py-6 md:py-12">
          <img
            src={assets.trust.badge}
            className="mx-auto w-12 h-12 md:w-20 md:h-20  "
            alt="Trust badge"
          />
          <img
            src={assets.home.logo}
            className="md:mx-auto"
            alt="Company logo"
          />
          <p className=" text-[12px] md:text-[32px] font-medium text-white text-center">
            We've made trust our cornerstone by building it into everything we
            do, brick by brick and day after day.
          </p>
        </div>
      </div>

      <div className="flex md:p-28 px-6 py-8 justify-between items-center bg-[#B9BFCD]">
        <div className="flex flex-col items-start md:w-1/3">
          <img
            src={assets.trust.house}
            className="md:w-2/5 w-[46px] mx-auto"
            alt="House illustration"
          />
          <div className="mx-auto">
            <p className="md:text-[32px] text-[9px] font-medium text-center text-[#172447] md:mt-6">
              Floor plans designed for
              <br />
              <span className="font-bold">LIVABILITY</span>
            </p>
          </div>
        </div>
        <div>
          <img
            src={assets.trust.live}
            alt="Living space illustration"
            className=" md:w-full md:h-full w-[209px] h-[117px]"
          />
        </div>
      </div>

      <div className=" flex items-center px-6 py-8   justify-between gap-6 md:gap-[160px] md:p-28">
        <div className="md:flex  hidden ">
          <img
            src={assets.trust.eff}
            alt="Efficiency illustration"
            className=""
          />
        </div>
        <div className="flex  md:hidden w-3/5">
          <img
            src={assets.trust.eff}
            alt="Efficiency illustration"
            className="w-[162px] h-[152px] "
          />
        </div>
        <div className="flex flex-col flex-1 text-center text-[9px] md:text-[32px] text-[#172447]">
          <img
            src={assets.trust.energy}
            className="md:h-[300px] h-[45px] w-[55px] md:w-[250px] mx-auto"
            alt="Energy efficiency"
          />
          <p className="font-medium mt-6 ">A dedication to energy</p>
          <p className="font-bold">EFFICIENCY</p>
        </div>
      </div>

      <div className="flex md:p-28 px-6 py-8 justify-between  gap-2 items-center bg-[#B9BFCD]">
        <div className="flex flex-col   md:w-1/3">
          <img
            src={assets.trust.star}
            className="md:w-2/5 w-[45px]  mx-auto"
            alt="Star icon"
          />
          <p className=" text-[9px] md:text-[32px] text-center text-[#172447] mt-6">
            Construction of the highest <br />
            <span className="font-semibold">DISTINCTION</span>
          </p>
        </div>

        <div className="hidden  md:block">
          <img src={assets.trust.dist} alt="Distinction illustration" />
        </div>
        <div className=" md:hidden  block">
          <img
            src={assets.trust.dist}
            alt="Distinction illustration"
            className="w-[211px] h-[112px] "
          />
        </div>
      </div>
      {/* rectangular card */}
      <div className="py-16">
        <div className="md:w-[894px] md:h-[412px] w-[300px] h-[200px]  mx-auto py-3 md:rounded-[30px]  rounded-[11px] shadow-[2px_4px_15px_0px_#00000040] bg-[#DDE0E7]">
          <div className="flex flex-col items-center md:rounded-[30px] rounded-[11px] border-brown border bg-[#DDE0E7] md:gap-8  md:px-16 px-8 py-4  md:py-6 w-[95%] h-[98%]  mx-auto text-center">
            <p className="md:text-[48px] text-[14px] font-semibold">
              MAKE AN INFORMED
              <br /> <span className="text-brown">CHOICE</span>
            </p>
            <p className="md:text-[20px]  text-[12px] mt-2 md:mt-0 font-normal">
              We back ourselves up to deliver and bring the best out of
              anything. Making a choice on quality should never be questioned.
            </p>
            <button className="md:h-[72px] md:w-[249px] h-[27px] w-[96px] md:text-xl mt-2 md:mt-0  text-[12px] font-bold text-white rounded-[2px]  md:rounded-lg hover:bg-[#2A4A8A] bg-blue">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Trust;
