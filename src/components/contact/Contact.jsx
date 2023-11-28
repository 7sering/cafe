import Coffee from "/coffe.png";

const Contact = () => {
  return (
    <>
      <div className="bg-[#3e221c] md:py-10">
        <h1 className="text-center text-3xl uppercase font-bold  text-white">
          Subscribe
        </h1>
        <p className="text-center text-white pb-5 pt-2 text-sm">
          Subscribe our newsletter to stay updated every moment
        </p>
        <div className="flex items-center justify-center pb-5">
          <form>
            <input
              type="text"
              placeholder="Enter your email......."
              className="py-2 pl-2 outline-none mr-1"
            />
            <button className="bg-orange-900 text-white py-2 px-6 rounded-sm font-bold hover:bg-orange-700 transition duration-500 ease-linear">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="bg-[#180D0B] h-auto py-8">
        <div className="max-w-6xl mx-auto flex flex-col py-10  text-[#fff] ">
          <div className="flex flex-wrap px-3">
            <div className="md:w-1/3">
              <h1 className="text-2xl font-bold text-orange-700">
                BeCafe Pvt.Ltd
              </h1>
              <hr width="50%" className="my-3" />
              <p className="text-sm pr-8">
                Welcome to BeCafe Pvt. Ltd, your haven for exceptional coffee
                experiences. Crafted with passion, at our coffee shop
              </p>
              <p className="pt-5">Call: 01-7523692</p>
              <p className="pt-1">Address: Boudha -6, Ktm</p>
              <p className="pt-1">Email: info@becafe.com.np</p>
            </div>
            <div className="md:w-1/3 flex flex-col items-center ">
              <ul>
                <h3 className="text-2xl font-bold text-orange-700">Menu</h3>
                <hr width="100%" className="my-3" />
                <li className="pb-1">
                  <a
                    href="/"
                    className="hover:text-orange-700 transition-all duration-500 ease-linear"
                  >
                    Home
                  </a>
                </li>
                <li className="pb-1">
                  <a
                    href="/"
                    className="hover:text-orange-700 transition-all duration-500 ease-linear"
                  >
                    Menu
                  </a>
                </li>
                <li className="pb-1">
                  <a
                    href="/"
                    className="hover:text-orange-700 transition-all duration-500 ease-linear"
                  >
                    Gallery
                  </a>
                </li>
                <li className="pb-1">
                  <a
                    href="/"
                    className="hover:text-orange-700 transition-all duration-500 ease-linear"
                  >
                    Location
                  </a>
                </li>
                <li className="pb-1">
                  <a
                    href="/"
                    className="hover:text-orange-700 transition-all duration-500 ease-linear"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-end ">
              <img src={Coffee} alt="coffee" width={200} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
