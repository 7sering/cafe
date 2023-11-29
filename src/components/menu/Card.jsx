const Card = ({ menus }) => {
  return (
    <>
      {menus.map((menu) => (
        <div
          className="w-xl sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-3"
          key={menu.id}
        >
          <div className="md:flex md:justify-between  md:bg-orange-900 mr-3 md:rounded-l-3xl md:rounded-r-1xl ">
            <div className="md:flex md:items-center ">
              <img
                src={menu.image}
                alt="img"
                width="70"
                className="rounded-md"
              />
              <p className="md:pl-3 md:text-sm text-[10px]">{menu.title}</p>
            </div>
            <p className="md:pt-3 md:pr-3 md:text-sm  text-[10px]">
              $ {menu.price}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
