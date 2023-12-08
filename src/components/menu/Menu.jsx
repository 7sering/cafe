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
      <div className="bg-[#160D0B] py-5 text-white relative z-0">
        <div className="max-w-6xl mx-auto relative z-10 ">
          <h1 className="text-center pt-5 font-bold text-2xl md:text-3xl">
            OUR MENU
          </h1>
          {/* Buttons */}
          <div className="flex gap-2 justify-center my-3 sm:my-6">
            <Button categories={categories} filteredMenu={filteredMenu} />
          </div>

          {/* Card */}
          <div className="md:flex flex-wrap md:pb-10 mt-8 sm:mt-12 flex">
            <Card menus={menus} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
