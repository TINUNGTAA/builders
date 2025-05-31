import HeroLayout from "../section/hero-layout";
import assets from "../../assets/assests";
import Footer from "../layout/Footer";

const Process = () => {
  return (
    <div >
      <HeroLayout backgroundImage={assets.process.bg9}>
        <div className="text-white  text-center">
          <h1 className="text-[64px] font-bold  leading-normal">
            Our Process is
            <br />
            <span className="text-brown">Trustworthy</span>{" "}
          </h1>
        </div>
      </HeroLayout>

      <div className="px-28">

        <div className=" py-16 text-2xl mx-auto  leading-normal text-center">

          <p>Honesty and transparency are the keys to your peace of mind when
            building your dream home. </p>
          <p>That's why Honest Builders exists. We pride
            ourselves on being proactive and walking
            alongside your vision </p>
          <p> for your dream home or commercial building,
            including you in every step of the way.</p>


        </div>

        <div className="">
          <div className=" flex items-center text-2xl bg-[#DDE0E7] p-3  rounded-2xl ">
            <div className="flex ">
              <img src={assets.process.team} />

            </div>

            <div className="w-2/5 leading-normal mx-auto">
              <p>From selecting the perfect floor plan to weekly progress
                updates, our team will keep you informed as
              </p>

              <p>though you are on site.
              </p>

            </div>
          </div>

        </div>

        <div className="">
          <div className="flex justify-end  ">
            <img src={assets.process.left} />

          </div>

          <p className="font-thin text-2xl">01.</p>
          <h1 className="mt-3 font-semibold text-3xl ">Your Plan Selection</h1>


          <div className=" flex  mt-3">



            <div className="flex text-2xl leading-normal flex-col">


              <p className="mt-6">    From the beginning, you're in charge. We work for you
                and aim to ensure your satisfaction with your
                chosen plan. You can also select from our architectural designs
                and floor plans, which are ideal for
                your family or business. </p>



              <p className="mt-6">Our dedicated engineers, masons, service providers, and field tech supervisor
                team will help you find the perfect home with a stress-free
                process that checks all the boxes.
              </p>

              <p className="mt-6">Your project may be an unfinished
                home already under construction,
                or you may choose a plan
                build from scratch; our service to
                you is a testament to our
                dedication to your worth.</p>


            </div>

            <div className="flex ">
              <img src={assets.process.selection} />

            </div>
          </div>

        </div>

        <div>
          <img src={assets.process.right} />

        </div>

        <div className=" w-2/3 mx-auto  text-center">
          <p className="font-thin text-2xl">02</p>
          <h1 className="text-3xl font-semibold mb-12">Preparing for the Phase</h1>
          <p className="text-2xl mb-6">Your construction will be categorized
            into phases for proper execution.
            We are here to drive the
            result, and you deserve a company you can trust for your
            biggest investment. You'll also meet with
            our construction manager and thoroughly
            review the final steps to initiate the first phase of
            construction together.</p>


          <div className="text-2xl text-center">
            <p>1.The land readiness</p>
            <p >2.Selected Plan to build a Foundational layout</p>
            <p>3.Start date and Estimated time of completion (ETC) of each phase</p>
          </div>

        </div>

        <div className="flex mt-16 items-center justify-center space-x-12">
          <img src={assets.process.phase1} />
          <img src={assets.process.phase2} />
          <img src={assets.process.phase} />

        </div>

        <div className=" flex justify-end mt-12">
          <img src={assets.process.left} /> </div>


        <div className=" flex justify-end font-thin text-2xl "> <p>03</p></div>

        <div className="flex ">

          <div>
            <img src={assets.process.construct} />
          </div>

          <div className="flex w-1/3  flex-col">
            <h1 className="text-3xl mb-12 font-semibold">Final selection and <br /> construction</h1>
            <p className="text-2xl leading-normal">Once a home or building plan is selected, it is time
              to make it
              uniquely yours. Our team is ready to
              help customize your buildable plans suitable for your specific use.
              Once construction begins, we'll
              follow up with you weekly with updates and
              photographs of progress, sent via your preferred method
              of communication.</p>
          </div>
        </div>


        <div className="py-16 mb-16">
          <div className="w-1/2 mx-auto py-6  rounded-3xl bg-[#DDE0E7]">
            {/* Inner Slate Box */}
            <div className="flex flex-col items-center rounded-xl border-brown border bg-[#DDE0E7] gap-12 px-16 py-6 w-[90%] mx-auto  text-center">
              <p className="text-xl font-semibold">
                MAKE AN INFORMED <span className="text-brown ">CHOICE</span>{" "}
              </p>
              <p className="text-xl">
                We back ourselves up to deliver and bring the best out of
                anything. Making a choice on quality should never be questioned.
              </p>
              <button className="py-2 px-8 text-2xl text-white rounded-lg bg-blue">
                Get Started
              </button>
            </div>
          </div>
        </div>




      </div>
      <Footer />
    </div>


  )
}
export default Process