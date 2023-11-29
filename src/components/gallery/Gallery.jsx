const Gallery = () => {
  return (
    <>
      <div className="bg-orange-900">
        <div className="flex flex-wrap items-center">
          <div className="md:w-2/4">
            <h2 className="md:pl-10 px-3 pt-8 pb-2 md:text-7xl text-5xl font-bold text-white">
              Drink. Eat. Meet. Have Fun
            </h2>
            <p className="md:pl-12 text-white md:text-md text-sm px-3 pb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              minima illum soluta magnam, asperiores fugit veniam, adipisci aut
              ipsa doloremque maiores incidunt saepe voluptates deleniti
              necessitatibus at dolore! Hic, laboriosam!
            </p>
          </div>
          <div className="md:w-2/4">
            <img
              src="https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className="h-[350px]  bg-[#160D0B]">
        <h2 className="text-center text-3xl font-bold py-8 text-white">
          coming soon....
        </h2>
      </div>
    </>
  );
};

export default Gallery;
