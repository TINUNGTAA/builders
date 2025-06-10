import HeroLayout from "../section/hero-layout";
import assets from "../../assets/assests";
import Footer from "../layout/Footer";

const Process = () => {

  return (
    <div className="font-inter">
      <HeroLayout backgroundImage={assets.process.bg9}>
        <div className="text-white h-[550px] flex items-center justify-center text-center">
          <h1 className="text-[64px] font-bold">
            Our Process is
            <br />
            <span className="text-brown">Trustworthy</span>
          </h1>
        </div>
      </HeroLayout>

      <div className="px-10">
        <div className=" lg:py-16 py-5 lg:[21px] px-[52px] lg:leading-snug lg:text-[32px] text-xs font-normal text-center">
          <p>
            Honesty and transparency are the keys to your peace of mind when building your dream home. That's why Honest Builders exists. We pride ourselves on being proactive and walking alongside your vision for your dream home or commercial building, including you in every step of the way.
          </p>
        </div>

        <div className="flex items-center bg-[#DDE0E7] p-2.5 gap-3 lg:gap-10 lg:flex-row flex-col rounded-2xl ">
          <img className="w-[152px] h-[118px] lg:w-[615px] lg:h-[477px]" src={assets.process.team} />

          <p className="lg:text-[32px] text:xs font-normal lg:text-center">
            From selecting the perfect <br /> floor plan to weekly progress <br /> updates, our team will keep <br /> you informed as <br /> though you are on site.
          </p>
        </div>

        <div className="gap-3">
          <div className="justify-end mt-12 hidden md:flex">
            <img src={assets.process.left} />
          </div>

          <div className="flex flex-col items-center md:hidden">
            <img src={assets.process.arrowDownBold} alt="arrow down" />
          </div>

          <div className="hidden md:flex font-thin text-[48px]">
            <p className="">01.</p>
          </div>
          <h1 className=" font-normal lg:text-[48px]">Your Plan Selection</h1>
          <div className="flex items-center gap-8 lg:flex-row flex-col-reverse ">
            <div className="items-center lg:gap-6 gap-3 lg:text-[32px] lg:leading-snug text-xs font-normal flex-col">
              <p className="">
                From the beginning, you're in charge. We work for you and aim to
                ensure your satisfaction with your chosen plan. You can also
                select from our architectural designs and floor plans, which are
                ideal for your family or business.
              </p>
              <br />
              <p className="">
                Our dedicated engineers, masons, service providers, and field
                tech supervisor team will help you find the perfect home with a
                stress-free process that checks all the boxes.
              </p>
              <br />
              <p className="">
                Your project may be an unfinished home already under
                construction, or you may choose a plan build from scratch; our
                service to you is a testament to our dedication to your worth.
              </p>
            </div>

            <div className="flex flex-1 relative ">
              <img src={assets.process.selection} className="w-[190px] h-[165.74] lg:w-[523px] lg:h-[656px]" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90.88deg, rgba(249, 249, 249, 0.2) 25.67%, rgba(241, 241, 241, 0.2) 46.63%, rgba(227, 227, 227, 0.2) 62.56%, rgba(0, 0, 0, 0.2) 100.2%)",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className=" hidden md:flex">
          <img src={assets.process.right} />
        </div>

        <div className="flex flex-col items-center md:hidden">
          <img src={assets.process.arrowDownBold} alt="arrow down" />
        </div>

        <div className="">
          <div className="text-center">
            <div className="hidden md:flex  flex-col items-center font-thin text-[48px]">
              <p className="">02</p>
            </div>
            <h1 className="font-normal lg:text-[48px]">
              Preparing for the Phase
            </h1>
            <p className="lg:text-[32px] text-xs lg:leading-snug font-normal lg:text-center">
              Your construction will be categorized into phases for proper
              execution. We are here to drive the result, and you deserve a
              company you can trust for your biggest investment. You'll also meet
              with our construction manager and thoroughly review the final steps
              to initiate the first phase of construction together.
            </p>

            <div className="text-xs mt-5 lg:text-[32px] lg:leading-snug text-center">
              <p>1.The land readiness</p>
              <p>2.Selected Plan to build a Foundational layout</p>
              <p>
                3.Start date and Estimated time of completion (ETC) of each phase
              </p>
            </div>
          </div>

          <div className="flex mt-16 items-center justify-center flex-col space-y-4 lg:flex-row lg:space-x-16 lg:space-y-0">
            <img className="w-[190px] h-[162px] lg:w-[482px] lg:h-[412px]" src={assets.process.phase1} alt="Phase 1" />
            <img className="w-[190px] h-[162px] lg:w-[482px] lg:h-[412px]" src={assets.process.phase2} alt="Phase 2" />
            <img className="w-[190px] h-[162px] lg:w-[482px] lg:h-[412px]" src={assets.process.phase} alt="Phase 3" />
          </div>

        </div>

        <div className=" justify-end mt-12 hidden md:flex">
          <img src={assets.process.left} />
        </div>

        <div className="flex flex-col items-center md:hidden">
          <img src={assets.process.arrowDownBold} alt="arrow down" />
        </div>

        <div className="hidden md:flex justify-end font-thin text-[48px]">
          <p>03</p>
        </div>

        <div className="flex items-center p-2.5 gap-3 lg:gap-10 lg:flex-row flex-col rounded-2xl">
          <img className="w-[152px] h-[118px] lg:w-[615px] lg:h-[477px]" src={assets.process.construct} />

          <div className="flex  flex-1  flex-col">
            <h1 className="lg:text-[48px] mb-6 font-normal">
              Final selection and construction
            </h1>
            <p className="lg:text-[32px] text-xs font-normal text-center lg:leading-snug">
              Once a home or building plan is selected, it is time to make it
              uniquely yours. Our team is ready to help customize your buildable
              plans suitable for your specific use. Once construction begins,
              we'll follow up with you weekly with updates and photographs of
              progress, sent via your preferred method of communication.
            </p>
          </div>
        </div>

        <div className="lg:py-16 lg:mb-16 my-4 flex flex-col items-center">
          <div className="lg:w-[894px] lg:h-[412px] w-[346px] rounded-[30px] shadow-[2px_4px_15px_0px_#00000040]  bg-[#DDE0E7]">
            {/* Inner Slate Box */}
            <div className="flex flex-col items-center rounded-[30px] border-brown border lg:mt-4 mt-1 bg-[#DDE0E7] gap-2 lg:gap-12 lg:px-16 px-2 py-4 lg:py-8  mx-2 text-center">
              <p className="lg:text-[48px] font-semibold">
                MAKE AN INFORMED <span className="text-brown ">CHOICE</span>
              </p>
              <p className="text-xs lg:text-[20px] font-normal lg:leading-snug">
                We back ourselves up to deliver and bring the best out of
                anything. Making a choice on quality should never be questioned.
              </p>
              <button className="lg:h-[72px] lg:w-[249px] lg:text-xl w-[96px] h-[27px] text-xs font-bold text-white rounded-md lg:rounded-lg bg-blue">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Process;
