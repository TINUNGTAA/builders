import HeroLayout from "../section/hero-layout";
import assets from "../../assets/assests";
import Footer from "../layout/Footer";

const Trust = () => {
  return (
    <div>
      <HeroLayout backgroundImage={assets.trust.bg6}>
        <div className="text-white text-center">
          <h1 className="text-[64px] font-bold  ">
            How Trust <br />
            Is
            <span className="text-brown px-3">Built</span>{" "}
          </h1>
        </div>
      </HeroLayout>
      <div className="w-2/3 mx-auto py-20">
        <p className=" text-center text-[32px]">
          At Honest Builders, we know your home is the most significant
          investment you'll ever make. Whether this is your first time or your
          fifth, you're the reason we've built our business on the foundation of
          honesty and transparency.
        </p>
      </div>

      <div className=" flex  px-28 py-16 items-center  gap-[280px] bg-blue ">
        <div className=" flex-col  w-1/5 ">
          <img src={assets.trust.review} />

          <p className="  text-white  text-center text-2xl">
            See reviews from our satisfied customers
          </p>
        </div>

        <div className=" flex  gap-12">
          <div className="  w-[380px] h-[380px]  py-3  rounded-3xl shadow-lg  bg-[#DDE0E7]">
            {/* Inner Slate Box */}
            <div className="flex flex-col items-center rounded-xl border-brown border bg-[#DDE0E7] gap-6 px-6  w-[90%] mx-auto  text-center">
              <p className="text-2xl mt-3 text-center font-semibold">
                Top Quality <br />
                <img src={assets.trust.stars} />
              </p>
              <p className="text-xl  text-center">
                Everyone, and I mean everyone; from the managers, to the worker
                and non-staff were very professional. The house is so gorgeous
                my wife can't stop gushing over it. Quality is out of this
                world. Top job!.
              </p>
              <p>Efisah. J</p>
            </div>
          </div>

          <div className=" flex  w-[380px] h-[380px]  py-3  rounded-3xl shadow-lg  bg-[#DDE0E7]">
            {/* Inner Slate Box */}
            <div className="flex flex-col items-center rounded-xl border-brown border bg-[#DDE0E7] gap-6 px-6  w-[90%] mx-auto  text-center">
              <p className="text-2xl mt-3 text-center font-semibold">
                Top Quality <br />
                <img src={assets.trust.stars} />
              </p>
              <p className="text-xl  text-center">
                Everyone, and I mean everyone; from the managers, to the worker
                and non-staff were very professional. The house is so gorgeous
                my wife can't stop gushing over it. Quality is out of this
                world. Top job!.
              </p>
              <p>Efisah. J</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/5 mx-auto  py-20">
        <p className=" text-center text-[32px] mb-12">
          “The hear4 of man is deceitful above all things,” and trust is hard to
          find, so we've dedicated ourselves to doing things right by you. Your
          peace of mind is very important to us, so we act with integrity and
          trustworthiness as core values in our relationship, and we stress the
          importance of every detail. From the initial start to completion, we
          ensure your hard-earned family resources aren't in the wrong hands.
        </p>


      </div>

      <div className=" flex rounded-full mx-auto items-center w-[680px] h-[680px]  mb-16  border-brown border-[5px]  bg-gray-500">
        <div className=" flex-col items-center justify-center mx-auto w-[654px] h-[654px]   border-brown border-[5px]  rounded-full bg-blue space-y-6 px-24 py-12">
          <img src={assets.trust.badge} className="mx-auto" />
          <img src={assets.home.logo} className="mx-auto" />

          <p className="text-[32px] font-medium text-white text-center">We've made trust our cornerstone by building it
            in to everything we do,
            brick by brick and day after day.</p>


        </div>
      </div>

      <div className="flex p-28 justify-between items-center bg-[#B9BFCD]">
        <div className="flex flex-col items-start  w-1/3">
          <img src={assets.trust.house} className="w-2/5 mx-auto" />

          <p className="text-[32px] text-center text-[#172447] mt-6">Floor plans designed for
            <br />
            <span className="font-semibold">LIVABILITY</span>
          </p>
        </div>

        <div>
          <img src={assets.trust.live} />
        </div>
      </div>

      <div className="flex items-center justify-between gap-[160px] p-28  ">
        <div className="flex w-3/5">
          <img src={assets.trust.eff} />
        </div>

        <div className=" flex flex-col flex-1 text-center  text-[#172447]">
          <img src={assets.trust.energy} className="h-[300px] " />
          <p className="text-3xl mt-6">A dedication to energy</p>
          <h1 className="text-3xl font-semibold">EFFICIENCY</h1>
        </div>
      </div>

      <div className="flex p-28 justify-between items-center bg-[#B9BFCD]">
        <div className="flex flex-col items-start  w-1/3">
          <img src={assets.trust.star} className="w-2/5 mx-auto" />

          <p className="text-[32px] text-center text-[#172447] mt-6">
            Construction of the highest <br />
            <span className="font-semibold">DISTINCTION</span>
          </p>
        </div>

        <div>
          <img src={assets.trust.dist} />
        </div>
      </div>

      <div className="py-16">
        <div className="w-1/2 mx-auto py-6 rounded-3xl shadow-lg  bg-[#DDE0E7]">
          {/* Inner Slate Box */}
          <div className="flex flex-col items-center rounded-xl border-brown border bg-[#DDE0E7] gap-12 px-16 py-6 w-[90%] mx-auto  text-center">
            <p className="text-5xl font-semibold">
              MAKE AN INFORMED <span className="text-brown ">CHOICE</span>{" "}
            </p>
            <p className="text-2xl">
              We back ourselves up to deliver and bring the best out of
              anything. Making a choice on quality should never be questioned.
            </p>
            <button className="py-2 px-8 text-2xl text-white rounded-lg bg-blue">
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
