import HeroLayout from "../components/section/hero-layout";
import assets from "../assets/assests";
import Footer from "../components/layout/Footer";
const Process = () => {
  return (
    <div className="font-inter">
      <HeroLayout backgroundImage={assets.process.bg9}>
        <div className="text-white h-[491px] md:h-[580px] flex items-center justify-center w-full">
          <div className="text-center w-full md:mt-[280px] mb-[200px]">
            <h1 className="md:text-[64px] text-center text-[24px] font-bold">
              Our Process is <br />
              <span className="text-brown px-3">Trustworthy</span>
            </h1>
          </div>
        </div>
      </HeroLayout>

      <div className="px-28">
        <div className=" py-16 text-[32px] font-normal  mx-auto   text-center">
          <p>
            Honesty and transparency are the keys to your peace of mind when
            building your dream home.{" "}
          </p>
          <p>
            That's why Honest Builders exists. We pride ourselves on being
            proactive and walking alongside your vision{" "}
          </p>
          <p>
            {" "}
            for your dream home or commercial building, including you in every
            step of the way.
          </p>
        </div>

        <div className="">
          <div className=" flex items-center  bg-[#DDE0E7] p-3  rounded-2xl ">
            <div className="flex ">
              <img src={assets.process.team} />
            </div>

            <div className="w-2/5 text-[32px] font-normal mx-auto">
              <p>
                From selecting the perfect floor plan to weekly progress
                updates, our team will keep you informed as
              </p>

              <p>though you are on site.</p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex justify-end  ">
            <img src={assets.process.left} />
          </div>

          <p className="font-thin text-[48px]">01.</p>
          <h1 className="mt-3 font-normal text-[48px] ">Your Plan Selection</h1>

          <div className="flex mt-3">
            <div className="flex w-2/3 text-[32px] font-normal flex-col">
              <p className="mt-6">
                From the beginning, you're in charge. We work for you and aim to
                ensure your satisfaction with your chosen plan. You can also
                select from our architectural designs and floor plans, which are
                ideal for your family or business.
              </p>

              <p className="mt-6">
                Our dedicated engineers, masons, service providers, and field
                tech supervisor team will help you find the perfect home with a
                stress-free process that checks all the boxes.
              </p>

              <p className="mt-6">
                Your project may be an unfinished home already under
                construction, or you may choose a plan build from scratch; our
                service to you is a testament to our dedication to your worth.
              </p>
            </div>

            <div className="flex flex-1 relative">
              <img src={assets.process.selection} className="w-full h-auto" />
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

        <div>
          <img src={assets.process.right} />
        </div>

        <div className=" w-2/3 mx-auto  text-center">
          <p className="font-thin text-[48px]">02</p>
          <h1 className="text-[48px] font-normal mb-12">
            Preparing for the Phase
          </h1>
          <p className=" text-[32px] font-normal mb-6">
            Your construction will be categorized into phases for proper
            execution. We are here to drive the result, and you deserve a
            company you can trust for your biggest investment. You'll also meet
            with our construction manager and thoroughly review the final steps
            to initiate the first phase of construction together.
          </p>

          <div className="text-[32px] text-center">
            <p>1.The land readiness</p>
            <p>2.Selected Plan to build a Foundational layout</p>
            <p>
              3.Start date and Estimated time of completion (ETC) of each phase
            </p>
          </div>
        </div>

        <div className="flex mt-16 items-center justify-center space-x-12">
          <img src={assets.process.phase1} />
          <img src={assets.process.phase2} />
          <img src={assets.process.phase} />
        </div>

        <div className=" flex justify-end mt-12">
          <img src={assets.process.left} />{" "}
        </div>

        <div className=" flex justify-end font-thin text-[48px] ">
          {" "}
          <p>03</p>
        </div>

        <div className="flex justify-between ">
          <div className="flex">
            <img src={assets.process.construct} />
          </div>

          <div className="flex  flex-1  flex-col">
            <h1 className="text-[48px] mb-6 font-normal">
              Final selection and construction
            </h1>
            <p className="text-[32px] font-normal">
              Once a home or building plan is selected, it is time to make it
              uniquely yours. Our team is ready to help customize your buildable
              plans suitable for your specific use. Once construction begins,
              we'll follow up with you weekly with updates and photographs of
              progress, sent via your preferred method of communication.
            </p>
          </div>
        </div>

        <div className="py-16 mb-16">
          <div className="w-[894px] h-[412px] mx-auto py-6 rounded-[30px] shadow-[2px_4px_15px_0px_#00000040]  bg-[#DDE0E7]">
            {/* Inner Slate Box */}
            <div className="flex flex-col items-center rounded-[30px]  border-brown border bg-[#DDE0E7] gap-12 px-16 py-8 w-[93%] mx-auto  text-center">
              <p className="text-[48px] font-semibold">
                MAKE AN INFORMED <span className="text-brown ">CHOICE</span>{" "}
              </p>
              <p className="text-[20px] font-normal">
                We back ourselves up to deliver and bring the best out of
                anything. Making a choice on quality should never be questioned.
              </p>
              <button className="h-[72px] w-[249px] text-xl font-bold text-white rounded-lg bg-blue">
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
