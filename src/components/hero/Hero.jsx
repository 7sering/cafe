const Hero = () => {
  return (
    <>
      <div className="bg-black/50">
        <div className="max-w-5xl mx-auto flex px-8 flex-col justify-center items-center md:h-screen h-[200px]">
          <h1 className="text-3xl md:text-8xl text-white uppercase font-bold  text-center mt-[-10px] md:mt-[-90px] ">
            Start a day with Fresh Coffee
          </h1>
          <div>
            {/* <button className="text-white text-xl bg-orange-900 py-3 px-9 mt-5 rounded-lg hover:bg-orange-600 transition-all duration-500 ease-in-out">
              Visit for coffee
            </button> */}

            <button className="text-white md:text-xl bg-orange-800 text-1xl py-1 px-5 md:py-3 md:px-9 mt-5 rounded-lg hover:bg-orange-600 transition-all duration-500 ease-in-out rounded-ss-[1.6rem] rounded-br-[1.6rem] shadow-md shadow-orange-100">
              Visit for coffee
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
