import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // console.log(isMenuOpen);
  return (
    <>
      <div className="bg-[#241310]  opacity-90">
        <div className="container mx-auto hidden md:flex text-white justify-between py-1 text-sm opacity-70">
          <p>Call: 01-5252523</p>
          <p>Mon-Fri: 8AM to 2PM Sat-Sun 10AM-4PM</p>
        </div>
      </div>

      <nav className="bg-[#241310] p-2 opacity-80 ">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo  */}
          <div className="text-white text-2xl font-bold">BeCafe</div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button className="text-white" onClick={toggleMenu}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={"2"}
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Menu */}
          <ul className="hidden md:flex space-x-8 text-[1rem] uppercase">
            <li className="text-white  hover:text-orange-700">
              <a href="/">Home</a>
            </li>
            <li className="text-white hover:text-orange-700">
              <a href="/menu">Menu</a>
            </li>
            <li className="text-white hover:text-orange-700">
              <a href="/gallery">Gallery</a>
            </li>
            <li className="text-white hover:text-orange-700">
              <a href="/location">Location</a>
            </li>

            <li className="text-white hover:text-orange-700">
              <a href="/service">Contact</a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen ? (
          <ul className="flex-col md:hidden  text-center ">
            <li className="text-white py-2">
              <a href="">Home</a>
            </li>
            <li className="text-white py-2">
              <a href="">About</a>
            </li>
            <li className="text-white py-2">
              <a href="">Service</a>
            </li>
            <li className="text-white py-2">
              <a href="">Blog</a>
            </li>
            <li className="text-white py-2">
              <a href="">Contact</a>
            </li>
          </ul>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
