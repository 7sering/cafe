const Button = ({ categories, filteredMenu }) => {
  return (
    <>
      {categories.map((category) => (
        <button
          className="bg-orange-800 py-1 px-5 rounded-ss-3xl rounded-br-3xl hover:bg-orange-500 transition-all duration-500 ease-linear shadow-sm shadow-orange-300"
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
