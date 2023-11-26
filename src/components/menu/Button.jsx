const Button = ({ categories, filteredMenu }) => {
  return (
    <>
      {categories.map((category, index) => (
        <button
          className="bg-orange-900 py-1 px-5 rounded-ss-3xl rounded-br-3xl hover:bg-orange-500 transition-all duration-500 ease-linear"
          onClick={() => filteredMenu(category)}
          key={index}
        >
          {category}
        </button>
      ))}
    </>
  );
};

export default Button;
