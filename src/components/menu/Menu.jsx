const Menu = () => {
  return (
    <>
      <div className="bg-[#180D0B] h-[350px] text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-center pt-5 font-bold text-3xl">MENU</h1>

          <div className="flex gap-2 justify-center my-3">
            <button className="bg-orange-900 py-1 px-5 rounded-ss-3xl rounded-br-3xl hover:bg-orange-500 transition-all duration-500 ease-in-out">
              Coffee
            </button>
            <button className="bg-orange-900 py-1 px-5  rounded-ss-3xl rounded-br-3xl hover:bg-orange-500 transition-all duration-500 ease-in-out">
              Dessert
            </button>
            <button className="bg-orange-900 py-1 px-5 rounded-ss-3xl rounded-br-3xl hover:bg-orange-500 transition-all duration-500 ease-in-out">
              Brunch
            </button>
          </div>
          <div className="flex max-w-7xl justify-center">
            <img
              src="https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="coffee"
              width={200}
            />
            <ul className="pl-5">
              <li>
                De Late Coffee
                ...........................................................
                $5.99
              </li>
              <li>
                Milk Coffee
                ...........................................................
                $5.99
              </li>
              <li>
                Cappuccino Coffee
                ...........................................................
                $5.99
              </li>
              <li>
                Americano Coffee
                ...........................................................
                $5.99
              </li>
              <li>
                Espresso Coffee
                ...........................................................
                $5.99
              </li>
              <li>
                Buba Cold Coffee
                ...........................................................
                $5.99
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
