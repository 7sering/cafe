import { useState } from "react";

import data from "../../data";
import { useEffect } from "react";

const Menu = () => {
  const [menus, setMenus] = useState(data);

  useEffect(() => {}, [menus, setMenus]);
  return (
    <>
      <div className="bg-[#160D0B] py-16 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-center pt-5 font-bold text-3xl">MENU</h1>
          {/* Buttons */}
          <div className="flex gap-2 justify-center my-3">
            <button className="bg-orange-900 py-1 px-5 rounded-ss-3xl rounded-br-3xl hover:bg-orange-500 transition-all duration-500 ease-linear">
              Coffee
            </button>
            <button className="bg-orange-900 py-1 px-5  rounded-ss-3xl rounded-br-3xl hover:bg-orange-500 transition-all duration-500 ease-linear">
              Dessert
            </button>
            <button className="bg-orange-900 py-1 px-5 rounded-ss-3xl rounded-br-3xl hover:bg-orange-500 transition-all duration-500 ease-linear">
              Brunch
            </button>
          </div>

          {/* Card */}
          <div className="flex flex-wrap  mt-8 ">
            {menus &&
              menus.map((menu) => (
                <div
                  className="w-xl sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-3"
                  key={menu.id}
                >
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <img
                        src={menu.image}
                        alt="img"
                        width="60"
                        className="rounded-md"
                      />
                      <p className="pl-5 text-sm">{menu.title}</p>
                    </div>
                    <p className="pt-3 pr-3 text-sm">$ {menu.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
