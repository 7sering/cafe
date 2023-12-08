const Card = ({ menus }) => {
  return (
    <>
      {menus.map((menu) => (
        <div
          className=" mx-auto md:w-1/4 lg:w-1/4 xl:w-1/4 mb-3 md:ml-0 ml-5"
          key={menu.id}
        >
          <div className="md:flex md:justify-between  md:bg-orange-900 mr-3 md:rounded-l-3xl md:rounded-r-1xl ">
            <div className="md:flex md:items-center ">
              <img
                src={menu.image}
                alt="img"
                // width="40"
                // height={40}
                className="rounded-md h-[50px] w-[50px]"
              />
              <p className="md:pl-3 md:text-sm text-[8px] text-center py-1">
                {menu.title}
              </p>
            </div>
            <p className="md:pt-3 md:pr-3 md:text-sm  text-center text-[8px]">
              $ {menu.price}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
