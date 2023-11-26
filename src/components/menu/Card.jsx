const Card = ({ menus }) => {
  return (
    <>
      {menus.map((menu) => (
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
    </>
  );
};

export default Card;
