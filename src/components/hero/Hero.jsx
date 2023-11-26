const Hero = () => {
  return (
    <>
      <div className="bg-black/30">
        <div className="max-w-5xl mx-auto flex flex-col justify-center items-center h-screen">
          <h1 className="text-8xl text-white uppercase font-bold text-center md:mt-[-90px] ">
            Start a day with Fresh Coffee
          </h1>
          <div>
            {/* <button className="text-white text-xl bg-orange-900 py-3 px-9 mt-5 rounded-lg hover:bg-orange-600 transition-all duration-500 ease-in-out">
              Visit for coffee
            </button> */}

            <button className="text-white text-xl bg-orange-800 py-3 px-9 mt-5 rounded-lg hover:bg-orange-600 transition-all duration-500 ease-in-out rounded-ss-[1.6rem] rounded-br-[1.6rem] shadow-md shadow-orange-100">
              Visit for coffee
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
