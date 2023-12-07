const Gallery = () => {
  return (
    <>
      <div className="bg-orange-900 ">
        <div className="flex flex-wrap items-center">
          <div className="md:w-full lg:w-2/4">
            <h2 className="md:pl-10 px-3 pt-8 pb-2 md:text-7xl text-5xl font-bold text-white">
              Drink. Eat. Meet. Have Fun
            </h2>
            <p className="md:pl-12 text-white md:text-md text-sm px-3 pb-8 pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              minima illum soluta magnam, asperiores fugit veniam, adipisci aut
              ipsa doloremque maiores incidunt saepe voluptates deleniti
              necessitatibus at dolore! Hic, laboriosam!
            </p>
          </div>
          <div className="md:w-full lg:w-2/4">
            <img
              src="https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-orange-900 ">
        <div className="flex flex-wrap items-center flex-col-reverse md:flex-row">
          <div className="md:w-full lg:w-2/4">
            <img
              src="https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img"
              className="w-full"
            />
          </div>
          <div className="md:w-full lg:w-2/4">
            <h2 className="md:pl-10 px-3 pt-8 pb-2 md:text-7xl text-5xl font-bold text-white">
              Fresh & Happy
            </h2>
            <p className="md:pl-12 text-white md:text-md text-sm px-3 pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              minima illum soluta magnam, asperiores fugit veniam, adipisci aut
              ipsa doloremque maiores incidunt saepe voluptates deleniti
              necessitatibus at dolore! Hic, laboriosam!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
