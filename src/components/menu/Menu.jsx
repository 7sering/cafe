import { useState, useEffect } from "react";
import data from "../../data";
import Card from "./Card";
import Button from "./Button";
// import Leaf from "/public/Leaf.png";
const Menu = () => {
  const [menus, setMenus] = useState(data);
  const [categories, setCategories] = useState([]);

  const filteredMenu = (category) => {
    if (category === "All") {
      setMenus(data);
    } else {
      const newMenu = data.filter((item) => item.category === category);
      setMenus(newMenu);
    }
  };

  useEffect(() => {
    setCategories(["All", ...new Set(data.map((item) => item.category))]);
    // setCategories(["Coffee", "Brunch", "Dessert"]);
  }, [menus]);
  return (
    <>
      <div className="bg-[#160D0B] py-16 text-white relative z-0">
        {/* <div
          className="h-screen w-full bg-cover absolute z-10 "
          style={{
            backgroundImage: `url(${Leaf})`,
            // backgroundImage: `url('')`,
          }}
        >
          <div className="absolute inset-1 bg-black opacity-20 "></div>
        </div> */}

        <div className="max-w-6xl mx-auto relative z-10 ">
          <h1 className="text-center pt-5 font-bold text-3xl">OUR MENU</h1>
          {/* Buttons */}
          <div className="flex gap-2 justify-center my-3">
            <Button categories={categories} filteredMenu={filteredMenu} />
          </div>

          {/* Card */}
          <div className="flex flex-wrap  mt-8 ">
            <Card menus={menus} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
