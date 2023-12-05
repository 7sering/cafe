const Blog = () => {
  return (
    <>
      <section className=" bg-[#241310] py-10">
        <h1 className="text-center text-white py-5 text-3xl uppercase font-bold ">
          Our Blog
        </h1>
        <div className="text-white grid p-4 gap-8 lg:grid-cols-4 lg:items-center lg:text-left overflow-hidden container mx-auto">
          <div className="bg-orange-900 p-3 rounded-md">
            <img
              src="https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              width={350}
            />
            <h1 className="py-2 text-3xl text-center md:text-left">
              Bean of Himalaya
            </h1>
            <p className="text-center md:text-left text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, quisquam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sunt molestias ducimus
            </p>
          </div>
          <div className="bg-orange-900 p-3 rounded-md">
            <img
              src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              width={350}
            />
            <h1 className="py-2 text-3xl text-center md:text-left">
              Coffee Festival
            </h1>
            <p className="text-center md:text-left text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, quisquam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sunt molestias ducimus
            </p>
          </div>
          <div className="bg-orange-900 p-3 rounded-md">
            <img
              src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              width={350}
            />
            <h1 className="py-2 text-3xl text-center md:text-left">
              How to brew
            </h1>
            <p className="text-center md:text-left text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, quisquam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sunt molestias ducimus
            </p>
          </div>
          <div className="bg-orange-900 p-3 rounded-md">
            <img
              src="https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              width={350}
            />
            <h1 className="py-2 text-3xl text-center md:text-left">
              Aroma of coffee
            </h1>
            <p className="text-center md:text-left text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, quisquam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sunt molestias ducimus
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
