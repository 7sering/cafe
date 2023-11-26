import { useState, useEffect } from "react";
import data from "../../data";
import Card from "./Card";
import Button from "./Button";

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
  }, [menus]);
  return (
    <>
      <div className="bg-[#160D0B] py-16 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-center pt-5 font-bold text-3xl">MENU</h1>
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
