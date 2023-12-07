const Button = ({ categories, filteredMenu }) => {
  return (
    <>
      {categories.map((category) => (
        <button
          className="md:bg-orange-800 py-1 px-3 md:px-5 border-b-2 border-b-orange-500  md:rounded-ss-3xl md:rounded-br-3xl md:hover:bg-orange-500 transition-all duration-500 ease-linear shadow-sm md:shadow-orange-300"
          onClick={() => filteredMenu(category)}
          key={category}
        >
          {category}
        </button>
      ))}
    </>
  );
};

export default Button;
