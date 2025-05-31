import assets from "../../assets/assests";
import HeroLayout from "../section/hero-layout";
import Footer from "../layout/Footer";

const Care = () => {
  return (
    <div>
      <HeroLayout backgroundImage={assets.care.bg8}>
        <div className="text-white text-center">
          <h1 className="text-[64px] font-bold  leading-normal">
            CUSTOMER CARE <br />
            WITH A<span className="text-brown px-2">Heart</span>{" "}
          </h1>
        </div>
      </HeroLayout>

      <div className="w-2/3 mx-auto text-2xl space-y-8 py-16 text-center ">
        <p>
          It's one thing to build a dream home, and another to stand behind it.
          And while we take pride in the quality of our work, we want you to
          have total trust in your new home.
        </p>

        <p>
          That's why we at Honest Builders include a 10-year structural,
          two-year mechanical and one- year functional warranty. If a problem
          should ever arise, our customer care representatives will be happy to
          help.
        </p>
      </div>

      <div
        className="h-[70vh] bg-cover bg-center py-12 flex items-center mb-24"
        style={{
          backgroundImage: `linear-gradient(to right, #000000CC, #070B15D8, #0C1427E1, #131F3CEC, #18274CF5, #1E305E), url(${assets.care.image4})`,
        }}
      >
        <div className=" flex  flex-col items-center w-2/6 mx-auto">
          <h1 className="text-xl font-semibold text-center text-white">
            Don't wait for long,
            <br /> let's get <span className="text-brown">started</span>
          </h1>
          <button className="py-2 px-8 text-2xl rounded-lg mt-8 bg-brown">
            Customer Care
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Care;
