import assets from "../../assets/assests";

const Gallery = () => {
  return (
    <div
      className=" w-full  overflow-x-hidden  h-[290px] md:h-[600px] flex bg-cover bg-center bg-no-repeat items-center justify-center font-inter"
      style={{ backgroundImage: `url(${assets.home.bg10})` }}
    >      <div className=" md:w-1/3 text-white flex-col text-center ">
        <h1 className= " text-[14px] md:text-[48px] font-bold mb-4">
          <span className="text-brown">SEEN</span> ANYTHING <br /> YOU LIKE?
        </h1>
        <p className=" text-[12px] md:text-[20px] font-semibold mb-6">
          Explore our gallery for great inspiration
        </p>
        <div>
          {" "}
          <button className="w-[174px] h-[40px] md:h-[60px] text-[10px] md:text-xl text-white rounded-lg bg-blue">
            Gallery
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
