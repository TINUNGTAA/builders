import assets from "../../assets/assests";
import Hero from "../section/hero-section";
import Plan from "../section/Plan";
import RegionCard from "../section/region";
import Footer from "../layout/Footer";
import Gallery from "../section/Gallery";
import PropertySection from "../section/PropertyCarousel";

const Landing: React.FC = () => {
  return (
    <section className="font-inter">
      <Hero />

      <div className="flex  px-28 gap-16 justify-between items-center py-20 ">
        {/* left */}
        <div className="  ">
          <h1 className=" text-[#625B71] text-[48px]  font-semibold">
            {" "}
            <span className="text-[#CD9F70] ">EXPLORE</span> <br />
            OUR COMMUNITY
          </h1>
        </div>

        {/* right */}
        <div>
          <img src={assets.home.community} />
        </div>
      </div>

      <div className=" mb-6 ">
        <RegionCard
          title="Greater Accra"
          backgroundImage={assets.home.greater_accra}
          icon={assets.home.accra}
          buttonText="Greater Accra"
        />

        <RegionCard
          title="Volta "
          backgroundImage={assets.home.volta}
          icon={assets.home.voltaMap}
          buttonText="volta"
        />

        <RegionCard
          title="Northern "
          backgroundImage={assets.home.north}
          icon={assets.home.northMap}
          buttonText="Nothern"
        />

        <RegionCard
          title="Bono-Ahafo "
          backgroundImage={assets.home.ahafo}
          icon={assets.home.ahafoMap}
          buttonText="Bono-Ahafo"
        />
      </div>

      <div className="flex  ">
        {/* right side */}
        <div className=" w-2/5 flex justify-center  items-center bg-[#E9EAEF] font-semibold">
          <div className="flex-col justify-center text-center  items-center px-20 ">
            <h1 className="text-[30px] font-semibold ">
              <p className="text-xl mt-10">Get started</p>
              Get the best offers on your favorite locations in your account
            </h1>

            <div className="flex gap-12 justify-center items-center mt-10">
              <button className="py-2 px-8 text-xl leading-none text-center text-white rounded-lg bg-brown">
                Login
              </button>{" "}
              or
              <button className="py-2 px-8 text-xl text-center text-white rounded-lg bg-blue">
                SignUp
              </button>
            </div>
          </div>
        </div>
        {/* left */}

        <div className=" flex-1 bg-[#B9BFCD]     w-full ">
          <PropertySection />
        </div>
      </div>

      <div className="flex justify-end mb-24">
        <div className="font-semibold text-[14px] flex">
          <div className="py-3 text-brown font-semibold  px-8 bg-blue">
            <a href="#">Recommended</a>
          </div>

          <div className="flex bg-[#DDE0E7]  text-[#00000080] py-3 px-6">
            <a href="#" className="px-6">
              Favorite
            </a>
            <a href="#" className="px-6">
              Recent Viewing
            </a>
          </div>
        </div>
      </div>

      <Gallery />

      <Plan />
      <Footer />
    </section>
  );
};

export default Landing;
