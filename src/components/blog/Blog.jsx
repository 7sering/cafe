const Blog = () => {
  return (
    <>
      <div className="relative z-0">
        <div
          className="h-screen w-full bg-cover bg-fixed"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 "></div>
          <div
            className="absolute inset-0"
            style={{ backdropFilter: "blur(5px)" }}
          ></div>
        </div>
        <div className="absolute inset-0 text-white flex flex-col justify-center items-center">
          <h1 className="text-3xl uppercase font-bold">Our Blog</h1>
          <p className="text-md pb-10 uppercase">
            visit us for taste the best coffee in town
          </p>
          <div className="md:flex container mx-auto gap-2">
            <div className="w-1/3 bg-orange-900/20">
              <img
                src="https://images.pexels.com/photos/302905/pexels-photo-302905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="coffee"
              />
              <h1 className="text-[1.2rem] font-bold pt-3 pl-3 uppercase">
                How To Brew Your Coffee
              </h1>
              <p className="text-sm  pl-3 pr-10 pb-5 pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                possimus culpa inventore, eveniet natus quo sit nesciunt
                praesentium ex iure nemo
              </p>
              <button className=" bg-orange-900 py-2 px-6 ml-3 rounded-md hover:bg-orange-700 mb-5 transition-all duration-500 ease-linear">
                Read More
              </button>
            </div>
            <div className="w-1/3 bg-orange-900/20">
              <img
                src="https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="coffee"
              />
              <h1 className="text-[1.2rem] font-bold pt-3 pl-3 uppercase">
                How To Brew Your Coffee
              </h1>
              <p className="text-sm  pl-3 pr-10 pb-5 pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                possimus culpa inventore, eveniet natus quo sit nesciunt
                praesentium ex iure nemo
              </p>
              <button className=" bg-orange-900 py-2 px-6 ml-3 rounded-md hover:bg-orange-700 mb-5 transition-all duration-500 ease-linear">
                Read More
              </button>
            </div>
            <div className="w-1/3 bg-orange-900/20">
              <img
                src="https://images.pexels.com/photos/685527/pexels-photo-685527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="coffee"
              />
              <h1 className="text-[1.2rem] font-bold pt-3 pl-3 uppercase">
                How To Brew Your Coffee
              </h1>
              <p className="text-sm  pl-3 pr-10 pb-5 pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                possimus culpa inventore, eveniet natus quo sit nesciunt
                praesentium ex iure nemo
              </p>
              <button className=" bg-orange-900 py-2 px-6 ml-3 rounded-md hover:bg-orange-700 mb-5 transition-all duration-500 ease-linear ">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;