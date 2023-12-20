import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/1394841/pexels-photo-1394841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full object-cover h-64 md:h-full" // Adjusted height for small screens
        />
        <div className="absolute inset-0 bg-black opacity-50 "></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0.5 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
              className="text-2xl md:text-8xl text-white uppercase font-bold mt-[-10px] md:mt-0"
            >
              Start a day with Fresh Coffee
            </motion.h1>
            <div>
              <button className="text-white md:text-xl bg-orange-800 text-1xl py-1 px-5 md:py-3 md:px-9 mt-5 rounded-lg hover:bg-orange-600 transition-all duration-500 ease-in-out rounded-ss-[5rem] rounded-br-[5rem] shadow-md shadow-orange-100">
                Visit for coffee
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
