const Gallery = () => {
  return (
    <>
      <div className="bg-orange-900 relative">
        <div className="flex flex-wrap items-center">
          <div className="w-2/4">
            <h2 className="pl-10 text-7xl font-bold text-white">
              Drink. Eat. Meet. Have Fun
            </h2>
            <p className="pl-12 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              minima illum soluta magnam, asperiores fugit veniam, adipisci aut
              ipsa doloremque maiores incidunt saepe voluptates deleniti
              necessitatibus at dolore! Hic, laboriosam!
            </p>
          </div>
          <div className="w-2/4">
            <img
              src="https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
